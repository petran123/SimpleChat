import { Component, Inject } from '@angular/core';
import { Message } from '../models/message.model'
import { MessagesService } from '../services/messages.service'


@Component({
    selector: 'messages-hook',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

    lastRetrievedMessageId: number;
    messages: Message[];
    
    constructor(private service: MessagesService) {
        // retrieve all the messages up to this point
        // save the message id somewhere
    }

    retrieveMessages() {
        this.service.getMessages().subscribe(messages => this.messages = messages);
        this.lastRetrievedMessageId = this.messages[(this.messages.length - 1)].id;
    }

    retrieveNewMessages() {
        // call a get request

        // assign the new messages with an array push

        // make sure they're entered in the right order and not opposite

        //the backend is already configured to return messages with Message.id > id, and as far as i know, they are sent in order of id ascending
    }
    
    ngOnInit() {
        this.retrieveMessages();
    }    
}

