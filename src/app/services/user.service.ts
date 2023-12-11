import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL: string = "http://localhost:3000/user"

  constructor(private httpClient : HttpClient ) { }

  addUser(userObj:any){
    return this.httpClient.post<{message : string}>(this.userURL, userObj);
  }

}
