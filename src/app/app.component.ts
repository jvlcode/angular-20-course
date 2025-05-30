import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './01-HttpClient/post/post.component';
import { NameEditorComponent } from './02-Reactive-Forms/name-editor/name-editor.component';
import { ProfileEditorComponent } from './02-Reactive-Forms/profile-editor/profile-editor.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NameEditorComponent, ProfileEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
   profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}
