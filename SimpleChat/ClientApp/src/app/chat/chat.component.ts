import { Component, Directive, } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChatService } from '../services/chat.service';
import { MessagingService } from '../services/messaging.service';

@Component({
    selector: 'chat-hook',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent {

    container: HTMLElement;
    lastShownMessageId = 0;

    constructor(private chatService: ChatService) {

    }

    messageForm = new FormGroup({
        newMessage: new FormControl('')
    });

    ngOnInit() {
        this.container = document.querySelector('.message-list');
        this.chatService.getMessages()

        //i don't like this, but it works alright in a small scale app
        setInterval(() => {
            this.chatService.getMessages();
        }, 1000);

    }

    ngDoCheck() {
        if (this.lastShownMessageId != this.chatService.lastRetrievedMessageId) {
            this.lastShownMessageId = this.chatService.lastRetrievedMessageId;
            this.scrollDown();
        }
    }

    scrollDown() {
        // I don't like this at all. I will change it when i find out a better option
        setTimeout(() => this.container.scrollTop = this.container.scrollHeight, 1);
    }

    submitMessage() {
        let messageBody = this.messageForm.get('newMessage').value;

        if (messageBody != '') {
            this.chatService.submitMessage(messageBody);

            this.messageForm.patchValue({
                newMessage: ''
            });
        }

    }
}
