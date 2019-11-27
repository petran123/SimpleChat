import { Component, Inject } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PickNameService } from './pick-name.service';
import { HomeComponent } from '../home/home.component';

@Component({
    selector: 'pick-name-hook',
    templateUrl: './pick-name.component.html',
    styleUrls: ['./pick-name.component.css']
})
export class PickNameComponent {

    user: User;
    users: User[];
    http: HttpClient;
    url: string;
    service: PickNameService;
    home: HomeComponent;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, home: HomeComponent) {
        this.http = http;
        this.url = baseUrl + "api/users/";
        this.home = home;
    }

    userForm = new FormGroup({
        userName: new FormControl('')
    });


    showUsers() {
        this.service.getUsers().subscribe((data: User) => this.user = {
            id: data['id'],
            userName: data['userName'],
            isActive: data['isActive']
        })

        console.log(this.users);
    }


    submitUserName() {
        //this.prepareToPost().subscribe(user => this.Users.push(User));
        let nameToSend = this.userForm.get('userName').value;
        console.log(nameToSend);
        console.log(this.url);

        //        return this.http.post<User>(this.baseUrl, nameToSend);


        // TODO redo this and understand what it actually does, step by step
        return this.http.post(this.url,
            {
                "UserName": nameToSend,
                "isActive": true
            })
            .subscribe(
                data => {
                    console.log("POST request was successful ", data);
                    this.home.hasPickedName();
                },
                error => {

                    console.log("Error", error);
                    ;
                });



    }
}

export interface User {

    id: number;
    userName: string;
    isActive: boolean;
}
