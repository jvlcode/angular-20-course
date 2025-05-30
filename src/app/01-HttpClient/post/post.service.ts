import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number
}

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private apiUrl = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl)
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  addPost(post: Partial<Post>): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post)
  }

  updatePost(post: Post) {
    return this.http.put<Post>(`${this.apiUrl}/${post.id}`, post)
  }

}
