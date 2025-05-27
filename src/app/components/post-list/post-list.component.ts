import { Component } from '@angular/core';
import { PostService, Post, PostWithEdit } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-post-list',
	imports: [CommonModule, FormsModule],
	templateUrl: './post-list.component.html',
	styleUrl: './post-list.component.css'
})
export class PostListComponent {
	posts: PostWithEdit[] = [];

	constructor(private postService: PostService) { }


	ngOnInit(): void {
		this.postService.getPosts().subscribe(data => {
			this.posts = data;
		});
	}

	newPost: Partial<Post> = { title: '', body: '', userId: 1 };

	submitPost() {
		this.postService.addPost(this.newPost).subscribe(created => {
			this.posts.unshift(created); // Add on top
			this.newPost = { title: '', body: '', userId: 1 };
		});
	}

	edit(post: PostWithEdit) {
		post.editing = true;
	}

	cancelEdit(post: PostWithEdit) {
		post.editing = false;
	}

	update(post: PostWithEdit) {
		this.postService.updatePost(post).subscribe(updated => {
			post.editing = false;
		});
	}

	delete(id: number) {
  this.postService.deletePost(id).subscribe(() => {
    this.posts = this.posts.filter(p => p.id !== id);
  });
}


}
