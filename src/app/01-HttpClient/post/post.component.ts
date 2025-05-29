import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post, PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  imports: [CommonModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  posts:Post[] = []
  constructor(private postService: PostService) {

  }

  ngOnInit():void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data
    })
  }

  newPost: Partial<Post> = {title:"", body:"", userId: 1}
  submitPost() {
    this.postService.addPost(this.newPost).subscribe((createdPost) => {
      this.posts.unshift(createdPost);
      this.newPost ={title:"", body:"", userId: 1}
    })
  }
}
