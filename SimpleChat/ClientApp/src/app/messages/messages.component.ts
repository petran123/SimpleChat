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

    constructor(private service: MessagesService, home: HomeComponent) {
        // TODO make this work
        this.home = home;
        //console.log("This is the messages user");
        //console.log(this.home.user);
    }

    retrieveMessages() {
        if (this.lastRetrievedMessageId != undefined) {
            this.service.getNewMessages(this.lastRetrievedMessageId).subscribe(messages => {
                messages.forEach((message) =>
                    //this.messages.push(message))
                    this.messages = [...this.messages, message])
                this.updateLastId();
                //console.log("latest retrieved has an id of " + this.lastRetrievedMessageId);
            },
                error => {

                    console.log("Error", error);
                    ;
                }
            );


        } else {
            this.service.getMessages().subscribe(messages => {
                //console.log('initialized messages');
                //console.log(this.lastRetrievedMessageId);
                this.messages = messages;
                this.updateLastId();
            }

            );
        }


    }

    updateLastId() {
        if (this.messages.length > 0) {
            this.lastRetrievedMessageId = this.messages[(this.messages.length - 1)].id;
        }
    }

    retrieveNewMessages() {
        // call a get request

        // assign the new messages with an array push

        // make sure they're entered in the right order and not opposite

        //the backend is already configured to return messages with Message.id > id, and as far as i know, they are sent in order of id ascending
    }

    ngOnInit() {
        this.retrieveMessages();
        //i don't like this
        setInterval(() => {
            this.retrieveMessages()
        }, 1000);

    }
}
