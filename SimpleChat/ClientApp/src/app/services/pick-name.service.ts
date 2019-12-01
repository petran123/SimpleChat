import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})
export class PickNameService {

    constructor(private http: HttpClient) { }

    usersUrl = 'api/users/'

    //This would be used to retrieve a list of users online
    //getUsers() {
    //    return this.http.get(this.usersUrl);
    //}

    createUser(nameToSend) {
        return this.http.post(this.usersUrl,
            {
                "UserName": nameToSend,
                "isActive": true
            })
    }
}
