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
            //post command here
            this.service.postMessage(this.home.user.userName, messageBody).subscribe((data: any) => {
                // inject the data into the messages array, force a refresh if you have to
                console.log(data);
            },
                error => {
                    console.log("Error", error);
                    ;
                });


            //console.log('-------------');
            //console.log("This should be posted");
            //console.log(this.home.user.userName);
            //console.log(messageBody);
            //console.log('-------------');

            this.messageForm.patchValue({
                newMessage: ''
            });
        }
    }

    ngOnInit() {
        //console.log("This is from chat, the first input happens here")
        //console.log(this.home.user);
    }

    // now we need a get for the user list, optionally a system that only shows those who are online


    // then we need a method that posts messages

}

// TODO learn how to use the pick-name interface instead of having a duplicate
