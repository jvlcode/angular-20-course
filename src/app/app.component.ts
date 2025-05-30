import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './01-HttpClient/post/post.component';
import { NameEditorComponent } from './02-Reactive-Forms/name-editor/name-editor.component';
import { ProfileEditorComponent } from './02-Reactive-Forms/profile-editor/profile-editor.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostComponent, NameEditorComponent, ProfileEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
