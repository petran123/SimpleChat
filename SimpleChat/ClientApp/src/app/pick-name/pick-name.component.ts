import { Component, Inject, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PickNameService } from '../services/pick-name.service';
import { HomeComponent } from '../home/home.component';

import { User } from '../models/user.model';

@Component({
    selector: 'pick-name-hook',
    templateUrl: './pick-name.component.html',
    styleUrls: ['./pick-name.component.css']
})
export class PickNameComponent {

    url: string;
    service: PickNameService;
    home: HomeComponent;

    constructor(service: PickNameService, @Inject('BASE_URL') baseUrl: string, home: HomeComponent) {
        this.url = baseUrl + "api/users/";
        this.home = home;
        this.service = service;
    }

    userForm = new FormGroup({
        userName: new FormControl('')
    });

    submitUserName() {

        let nameToSend = this.userForm.get('userName').value;

        this.service.createUser(nameToSend)
            .subscribe(
                (data: any) => {
                    this.home.user = new User(data.id, data.userName, data.isActive);
                    this.home.hasPickedName();
                },
                error => {
                    console.log("Error", error);
                });
    }
}
