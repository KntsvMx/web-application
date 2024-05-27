import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";
import {RegisterRequestPayload} from "./payload/RegisterRequestPayload";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerRequestPayload: RegisterRequestPayload;

  constructor(private router: Router, private authService: AuthService) {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.registerRequestPayload = {
      name: '',
      surname: '',
      email: '',
      password: ''
    };
  }

  register() {
    // @ts-ignore
    this.registerRequestPayload.name = this.registerForm.get('name').value;
    // @ts-ignore
    this.registerRequestPayload.surname = this.registerForm.get('surname').value;
    // @ts-ignore
    this.registerRequestPayload.email = this.registerForm.get('email').value;
    // @ts-ignore
    this.registerRequestPayload.password = this.registerForm.get('password').value;

    // this.authService.register(this.registerRequestPayload);
  }

  login() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
}
