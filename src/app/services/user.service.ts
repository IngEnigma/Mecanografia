import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  postLogin(email: string, password: string) {
    console.log("email: " + email)
    console.log("password: " + password)
  
    return "user"
  }
  
}
