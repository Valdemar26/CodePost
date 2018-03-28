import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from "./post";
import { Observable } from "rxjs";

@Injectable()
export class PostService {

  constructor(private _http: HttpClient) { }

  getPosts(): Observable<any> {
    return this._http.get("/api/posts");
  }

  getPost(id): Observable<any> {
    return this._http.get("/api/details/" + id);
  }

  insertPost(post: Post) {
    return this._http.post('/api/posts', JSON.stringify(post));
  }

}
