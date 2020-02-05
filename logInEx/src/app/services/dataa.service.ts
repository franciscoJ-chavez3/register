import { Injectable } from '@angular/core';
import { Iuser } from '../interfaces/iuser'

@Injectable({
  providedIn: 'root'
})
export class DataaService {
  userList: Iuser[] = [
    {uName: 'jateen', pWord: 'jaTeam'}
  ];
  constructor() { }

  checkCred(userName: string, password: string): boolean {
    let result = false;
    if(userName === this.userList[0].uName) {
      if(password === this.userList[0].pWord) {
        //set result to true
        result = true;
      }
    }
    //return
    return result;
  }

  checkIfUserExists(username: string): boolean {
    //set result and return if user exists
    let result = false;
    console.log(this.userList.find(x => username.toLowerCase() === x.uName) === undefined); {
      result = true;
    }
    return result;
  }

  addUser(username: string, password: string) {
    //push user
    let newUser: Iuser = {
      uName: username.toLowerCase(), 
      pWord: password
    }

    this.userList.push(newUser);
  }
}
