import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Post } from './Model/Post';
import { Observable } from 'rxjs/Observable';

let posts = [
  {
    _id: "09282",
    title: 'Install Angular CLI',
    url: "/toto/toto",
    content: "PLop la girage"
  }
];
@Injectable()
export class PostService {
  constructor(private http: Http) {
    this.http = http;
  }
  private baseUrl = "/api/v1"
  getAll(): Observable<Post> {
    return this.http.get(this.baseUrl + "/posts")
      .map(res => res.json());
  }

  add(data) {
    return new Promise(resolve => {
      posts.push(data);
      resolve(data);
    });
  }

  put(data) {
    return new Promise(resolve => {
      let index = posts.findIndex(todo => todo._id === data._id);
      posts[index].title = data.title;
      resolve(data);
    });
  }

  delete(id) {
    return new Promise(resolve => {
      let index = posts.findIndex(todo => todo._id === id);
      posts.splice(index, 1);
      resolve(true);
    });
  }

  deleteCompleted() {
    return new Promise(resolve => {
      resolve(posts);
    });
  }
}