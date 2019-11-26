import { Component, Inject } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HomeService } from './home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    user: User;
    users: User[];
    http: HttpClient;
    baseUrl: string;
    service: HomeService;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.http = http;
        this.baseUrl = baseUrl + "api/users/";
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
        console.log(this.baseUrl);

        //        return this.http.post<User>(this.baseUrl, nameToSend);

        // TODO redo this and understand what it actually does, step by step
        return this.http.post(this.baseUrl,
            {
                "UserName": nameToSend
            })
            .subscribe(
                data => {
                    console.log("POST request was successful ", data);
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
