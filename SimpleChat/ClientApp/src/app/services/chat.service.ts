//this will contain the get function for the user list
import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';
import { User } from '../models/user.model';
import { MessagingService } from './messaging.service';

@Injectable({
    providedIn: 'root',
})
export class ChatService {

    // this will now hold the data

    lastRetrievedMessageId: number;
    messages: Message[];
    user: User;
    //users: User[];


    constructor(private messagingService: MessagingService) {

    }

    getMessages() {
        if (this.lastRetrievedMessageId != undefined) {
            this.getNewMessages()
        } else {
            this.getAllMessages();
        }
    }

    getAllMessages() {
        this.messagingService.getMessages().subscribe(messages => {
            this.messages = messages;
            if (messages[0] != undefined) {
                this.updateLastId();
            }
        });
    }

    updateLastId() {
        this.lastRetrievedMessageId = this.messages[(this.messages.length - 1)].id;
    }

    getNewMessages() {
        this.messagingService.getNewMessages(this.lastRetrievedMessageId).subscribe(messages => {
            messages.forEach((message) => 
                this.messages = [...this.messages, message]);

            if (this.lastRetrievedMessageId < this.messages[(this.messages.length - 1)].id) {
                this.updateLastId();
            }
        },
            error => {
                console.log("Error", error);
            });
    }

    submitMessage(messageBody) {

        this.messagingService.postMessage(this.user.userName, messageBody).subscribe((data: any) => {

        },
            error => {
                console.log("Error", error);
            });
    }

}




