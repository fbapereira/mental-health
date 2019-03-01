import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const user: User = {
      email: this.form.controls['email'].value,
      name: this.form.controls['name'].value,
      password: this.form.controls['password'].value,
    };

    this.userService.create(user).subscribe(() => {
      this.snackBar.open('Your user has been created');
    });
  }
}
