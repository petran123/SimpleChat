import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})
export class PickNameService {

    constructor(private http: HttpClient) { }

    usersUrl = 'api/users/'

    getUsers() {
        return this.http.get(this.usersUrl);
    }
}