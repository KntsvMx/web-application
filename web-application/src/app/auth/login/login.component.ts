import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRequestPayload} from "./payload/LoginRequestPayload";
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;

  constructor(private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.loginRequestPayload = {
      username: '',
      password: ''
    };
  }

  login() {
    // @ts-ignore
    this.loginRequestPayload.username = this.loginForm.get('username').value;
    // @ts-ignore
    this.loginRequestPayload.password = this.loginForm.get('password').value;

    // this.authService.login(this.loginRequestPayload);
  }

  register() {
    this.router.navigate(['/register']);
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
}
