import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  
  getData(){
    let url="https://jsonplaceholder.typicode.com/users";
    return this.http.get(url);
  }
  getimage(){
    let apiurl="https://jsonplaceholder.typicode.com/photos";
    return this.http.get(apiurl);
  }
  getAdvice(){
    let url="https://api.adviceslip.com/advice";
    return this.http.get(url);
  }
}

