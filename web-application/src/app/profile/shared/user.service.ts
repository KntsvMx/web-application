import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class UserService {
  // private apiUrl = 'http://localhost:8080/api/v1/users'; // Change url to my API

  constructor() { }

  private user = {
    userName: 'john_doe',
    email: 'john@example.com',
    role: 'user',
    createdAt: new Date()
  };

  getUser(): Observable<any> {
    return of(this.user);
  }

  updateUser(updatedUser: any): Observable<any> {
    this.user = { ...this.user, ...updatedUser };
    return of(this.user);
  }

}
