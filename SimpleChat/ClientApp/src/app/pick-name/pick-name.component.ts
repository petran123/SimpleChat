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


    // TODO restructure this so that users are objects of the user class
    //users: User[];
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


    // TODO make this work
    //showUsers() {
    //    this.service.getUsers().subscribe((data: any[]) => {
              
    //        data.forEach(() => {
    //            this.home.users.push(new User(data['id'], data['userName'], data['isActive']));
    //        })
    //        console.log('-----------');
    //        console.log(this.home.users);
    //        console.log('-----------');
    //        })
    //}





    submitUserName() {
        //this.prepareToPost().subscribe(user => this.Users.push(User));
        let nameToSend = this.userForm.get('userName').value;
        //console.log(nameToSend);
        //console.log(this.url);

        //        return this.http.post<User>(this.baseUrl, nameToSend);


        // TODO redo this and understand what it actually does, step by step
        return this.http.post(this.url,
            {
                "UserName": nameToSend,
                "isActive": true
            })
            .subscribe(
                (data: any) => {
                    this.home.user = new User(data.id, data.userName, data.isActive);
                    this.home.hasPickedName();
                    //console.log("POST request was successful ", this.home.user);
                },
                error => {

                    console.log("Error", error);
                    ;
                });
    }
}
