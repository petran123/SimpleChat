import { Component, Inject, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PickNameService } from '../services/pick-name.service';
import { HomeComponent } from '../home/home.component';

import { User } from '../models/user.model';
import { ChatService } from '../services/chat.service';


@Component({
    selector: 'pick-name-hook',
    templateUrl: './pick-name.component.html',
    styleUrls: ['./pick-name.component.css']
})
export class PickNameComponent {

    url: string;

    constructor(private pickNameService: PickNameService, @Inject('BASE_URL') baseUrl: string, private home: HomeComponent, private chatService: ChatService) {
        this.url = baseUrl + "api/users/";

    }

    userForm = new FormGroup({
        userName: new FormControl('')
    });

    submitUserName() {

        let nameToSend = this.userForm.get('userName').value;

        this.pickNameService.createUser(nameToSend)
            .subscribe(
                (data: any) => {
                    this.chatService.user = new User(data.id, data.userName, data.isActive);
                    this.home.hasPickedName();
                },
                error => {
                    console.log("Error", error);
                });
    }
}
