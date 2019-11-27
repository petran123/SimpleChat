import { Component, Inject } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { PickNameComponent } from '../pick-name/pick-name.component';

@Component({
    selector: 'chat-hook',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})

export class ChatComponent {
    //users: User[];
    currentUser = "Dokimastikos";

    constructor() {



        console.log(this.currentUser);
        //console.log(this.users);
    }

    messageForm = new FormGroup({
        newMessage: new FormControl('')
    });

    submitMessage() {
        if (!(this.messageForm.get('newMessage').value == '')) {
            console.log(this.messageForm.get('newMessage').value);
            this.messageForm.patchValue({
                newMessage: ''
            });
        }
    }



    // now we need a get for the user list, optionally a system that only shows those who are online


    // then we need a method that posts messages


}

// TODO learn how to use the pick-name interface instead of having a duplicate
export interface User {

    id: number;
    userName: string;
    isActive: boolean;
}
