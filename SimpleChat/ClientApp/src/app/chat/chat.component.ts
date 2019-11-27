import { Component, Inject } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'chat-hook',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})

export class ChatComponent {
    users: User[];
    name = 'Karkiniasa';

    // now we need a get for the user list, optionally a system that only shows those who are online


    // then we need a method that posts messages

    



}

// TODO learn how to use the pick-name interface instead of having a duplicate
export interface User {

    id: number;
    userName: string;
    isActive: boolean;
}
