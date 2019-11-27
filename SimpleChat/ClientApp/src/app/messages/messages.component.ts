import { Component, Inject } from '@angular/core';
import { Message } from '../models/message.model'
import { MessagesService } from '../services/messages.service'


@Component({
    selector: 'messages-hook',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

    service: MessagesService;

    lastRetrievedMessageId: number;
    messages: Message[];
    
    constructor() {
        // retrieve all the messages up to this point
        // save the message id somewhere
        this.retrieveMessages();
    }

    retrieveMessages() {
        console.log(this.service.getMessages());
    }
    
    
    

    
}

