import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
