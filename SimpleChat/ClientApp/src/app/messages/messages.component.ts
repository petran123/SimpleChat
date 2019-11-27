import { Component } from '@angular/core';


@Component({
    selector: 'messages-hook',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

    //messages: Message[];

    //constructor() {
    //    this.messages = ['']
    //}

    messages = ['proto', 'deutero', 'trito', 'tetarto'];
}

export interface Message {
    body: string
}
