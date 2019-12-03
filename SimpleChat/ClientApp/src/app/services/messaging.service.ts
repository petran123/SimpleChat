import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.model'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class MessagingService {

    messageUrl = 'api/messages/';

    constructor(private http: HttpClient) {
    }


    getMessages(): Observable<Message[]> {
        return this.http.get<Message[]>(this.messageUrl).pipe(map(data =>
            data.map(data =>
                new Message().deserialize(data)
            )));
    }

    postMessage(userName: string, messageBody: string) {
        return this.http.post(this.messageUrl,
            {
                "userName": userName,
                "messageBody": messageBody
            }
        );
    }

    getNewMessages(id: number): Observable<Message[]> {
        return this.http.get<Message[]>(this.messageUrl + id).pipe(map(data =>
            data.map(data =>
                new Message().deserialize(data)
            )));
    }


}
