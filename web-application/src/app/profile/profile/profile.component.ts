import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from "../shared/user.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  // @ts-ignore
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user;
      this.profileForm = this.fb.group({
        userName: [user.userName, Validators.required],
        email: [user.email, [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.userService.updateUser(this.profileForm.value).subscribe(updatedUser => {
        this.user = updatedUser;
        alert('Profile updated successfully!');
      });
    }
  }
}
