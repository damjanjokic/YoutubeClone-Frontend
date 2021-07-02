import { PostParams } from '../_models/PostParams';
import { Post } from './../_models/post';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
  })
  export class PostService {
    baseUrl = `${environment.apiUrl}posts/`;
  
    constructor(private http: HttpClient) {}

    getPostsByUsername(username): Observable<Post[]> {
      return this.http.get<Post[]>(this.baseUrl+'user/'+ username);
    }

    getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(this.baseUrl);
    }
}
