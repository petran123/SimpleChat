import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    name = new FormControl('');

    submitName() {
        // how do i even extract the name from this form?
        return false;
    }
}
