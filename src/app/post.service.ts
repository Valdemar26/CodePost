import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  result: any;

  constructor(private _http: HttpClient) { }

  getPosts() {
    return this._http.get("/api/posts")
        .map(result => this.result = result.json() || []);
  }

}
