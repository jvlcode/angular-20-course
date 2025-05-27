import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-example',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms-example.component.html',
  styleUrl: './reactive-forms-example.component.css'
})
export class ReactiveFormsExampleComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    gender: new FormControl('male', Validators.required),
    country: new FormControl('India', Validators.required),
  });

  onSubmit() {
    if (this.form.valid) {
      alert('Form submitted: ' + JSON.stringify(this.form.value, null, 2));
    } else {
      this.form.markAllAsTouched(); // Show errors on untouched fields
    }
  }
}
