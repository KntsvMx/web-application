import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})

export class FeedbackComponent {
  feedbackForm: FormGroup;
  submitStatus: string | null = null;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      this.isLoading = true;
      // Simulate a HTTP request
      setTimeout(() => {
        this.isLoading = false;
        this.submitStatus = 'Thank you for your feedback!';
        this.feedbackForm.reset();
        setTimeout(() => {
          this.submitStatus = null;
        }, 3000);
      }, 2000);
    } else {
      this.submitStatus = 'Please fill in the form correctly.';
    }
  }
}

