import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http:HttpClient) { }

  // getCustomer(){
  //   return this.http.get("https://jsonplaceholder.typicode.com/users");
  // }
}
