import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  imports: [ReactiveFormsModule],
  templateUrl: './name-editor.component.html',
  styleUrl: './name-editor.component.css'
})
export class NameEditorComponent {
  name = new FormControl('')

  updateName() {
    this.name.setValue("Nancy")
  }
}
