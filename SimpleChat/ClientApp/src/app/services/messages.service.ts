import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.model'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// this will contain the messages get function
// i want the first get to contain all the messages and afterwards i want to get the messages since the last displayed one

@Injectable({
    providedIn: 'root',
})
export class MessagesService {




    constructor(private http: HttpClient) { }

    messagesUrl = 'api/messages/'



    getMessages(): Observable<Message[]> {
        return this.http.get<Message[]>(this.messagesUrl).pipe(map(data =>
            data.map(data =>
                new Message().deserialize(data)
            )));
    }

    getNewMessages(id: number): Observable<Message[]> {
        // TODO try eventSource
        return this.http.get<Message[]>(this.messagesUrl + id).pipe(map(data =>
            data.map(data =>
                new Message().deserialize(data)
            )));
    }
}
