//this will contain the get function for the user list
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})

export class ChatService {
    //http: HttpClient;
    messageUrl = 'api/messages';

    constructor(private http: HttpClient) {
        //this.http = http;
    }

    postMessage(userName: string, messageBody: string ) {
        return this.http.post(this.messageUrl,
            {
                "userName": userName,
                "messageBody": messageBody
            }
        );
    }
}
