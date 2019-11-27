import { Component, Inject } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    hasName = false;

    hasPickedName() {
        this.hasName = true;
    }
  
}

export interface User {

    id: number;
    userName: string;
    isActive: boolean;
}
