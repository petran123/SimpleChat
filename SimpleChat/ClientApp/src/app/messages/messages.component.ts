import { Component } from '@angular/core';
import { Message } from '../models/message.model'
import { MessagesService } from '../services/messages.service'
import { HomeComponent } from '../home/home.component';

@Component({
    selector: 'messages-hook',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

    lastRetrievedMessageId: number;
    messages: Message[];
    home: HomeComponent;
    container: HTMLElement;

    constructor(private service: MessagesService, home: HomeComponent) {
        this.home = home;
    }

    retrieveMessages() {
        if (this.lastRetrievedMessageId != undefined) {
            this.retrieveNewMessages();
        } else {
            this.retrieveAllMessages();
        }
    }

    retrieveAllMessages() {
        this.service.getMessages().subscribe(messages => {
            this.messages = messages;
            if (messages[0] != undefined) {
                this.updateLastId();
                
            }
        });
    }

    updateLastId() {
        this.lastRetrievedMessageId = this.messages[(this.messages.length - 1)].id;
    }

    retrieveNewMessages() {
        this.service.getNewMessages(this.lastRetrievedMessageId).subscribe(messages => {
            messages.forEach((message) => 
                this.messages = [...this.messages, message]);

            if (this.lastRetrievedMessageId < this.messages[(this.messages.length - 1)].id) {
                this.updateLastId();
                this.scrollDown();
            }

            
        },
            error => {
                console.log("Error", error);
            });
    }

    ngOnInit() {
        this.container = document.querySelector('.message-list');
        this.retrieveMessages();
        //i don't like this, but it works alright in a small scale app
        setInterval(() => {
            this.retrieveMessages();
        }, 1000);
        setTimeout(() => this.container.scrollTop = this.container.scrollHeight, 200);
    }



    
    scrollDown() {
        // I don't like this at all. I will change it when i find out a better option
        setTimeout(() => this.container.scrollTop = this.container.scrollHeight, 50);
        
    }


}
