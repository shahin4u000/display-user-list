import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  private restUrl:string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient:HttpClient) { }

  public getUserLists(){
    return this.httpClient.get(this.restUrl);
  }
}
