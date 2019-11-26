import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    userForm = new FormGroup({
        userName: new FormControl('')
    });

    constructor(private http: HttpClient) { }

    submitUserName() {
        // how do i even extract the name from this form?
        console.log(this.userForm.get('userName').value);
        return false;
    }
}
