import { Component, } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { ChatService } from '../services/chat.service';

@Component({
    selector: 'chat-hook',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})

export class ChatComponent {

    home: HomeComponent;
    service: ChatService;

    constructor(home: HomeComponent, service: ChatService) {
        this.home = home;
        this.service = service;
    }

    messageForm = new FormGroup({
        newMessage: new FormControl('')
    });

    submitMessage() {
        let messageBody = this.messageForm.get('newMessage').value;

        if (messageBody != '') {
            this.service.postMessage(this.home.user.userName, messageBody).subscribe((data: any) => {
                
                
            },
                error => {
                    console.log("Error", error);
                });

            this.messageForm.patchValue({
                newMessage: ''
            });
        }
    }

}
