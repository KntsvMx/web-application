import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedbackComponent} from "./feedback/feedback.component";
import {ProfileComponent} from "./profile/profile.component";
import {ProgressComponent} from "./progress/progress.component";
import {QuizComponent} from "./quiz/quiz.component";
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    FeedbackComponent,
    ProfileComponent,
    ProgressComponent,
    QuizComponent
  ],
  exports: [
    FeedbackComponent,
    ProfileComponent,
    ProgressComponent,
    QuizComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class ProfileModule {
}
