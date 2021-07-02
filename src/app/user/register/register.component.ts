import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomValidators } from 'src/app/_helpers/custom-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        username: ['', Validators.required],
        displayName : ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.email],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            CustomValidators.patternValidator(/\d/, { hasNumber: true }),
            CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
            CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      { validator: CustomValidators.passwordMatchValidator }
    );
  }

  signUp() {
    const username = this.formGroup.get('username').value;
    const displayName = this.formGroup.get('displayName').value;
    const firstName = this.formGroup.get('firstName').value;
    const lastName = this.formGroup.get('lastName').value;
    const password = this.formGroup.get('password').value;
    const email = this.formGroup.get('email').value;

    this.authService.register({ username, displayName, password, firstName, lastName, email }).subscribe(
      (res) => {
        this.toastr.success('Registration successfull!');
        this.router.navigate(['user/login']);
      },
      (err) => {
        this.toastr.error('Registration failed!');
      }
    );
  }

}
