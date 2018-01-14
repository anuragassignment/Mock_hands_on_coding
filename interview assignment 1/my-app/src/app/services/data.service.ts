import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


// Global service which uses get method to fetch data from public api

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
