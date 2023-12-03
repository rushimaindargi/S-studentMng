import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Posts } from './models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl= 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  listAllPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.baseUrl}`);
  }

  createPost(post:Posts): Observable<any>{
    return this.http.post(`${this.baseUrl}`,post);
  }

  retrievePost(id:number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  updatePost(post:Posts): Observable<any>{
    return this.http.put(`${this.baseUrl}/update`,post);
  }
  deletePost(id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
