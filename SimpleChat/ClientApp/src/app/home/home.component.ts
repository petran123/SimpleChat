import { Component } from '@angular/core';
import { User } from '../models/user.model';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    user: User;
    users: User[] = [];

    hasName = false;

    hasPickedName() {
        this.hasName = true;
    }

}
