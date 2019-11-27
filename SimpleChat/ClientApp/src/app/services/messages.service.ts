import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// this will contain the messages get function
// i want the first get to contain all the messages and afterwards i want to get the messages since the last displayed one

@Injectable({
    providedIn: 'root',
})
export class MessagesService {




    constructor(private http: HttpClient) { }

    messagesUrl = 'api/messages/'


    
    getMessages() {
        return this.http.get(this.messagesUrl);
    }

    getNewMessages(id: number) {
        // server queries the messages table for where message.Id > id
        return this.http.get(this.messagesUrl + '/' + id);
    }
}
