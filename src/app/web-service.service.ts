import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebServiceService {
  constructor(private httpClient: HttpClient) {}

  url: string = 'https://jsonplaceholder.typicode.com/users';

  getPosts() {
    return this.httpClient.get(this.url);
  }
}
