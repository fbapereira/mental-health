import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const user: User = {
      name: '',
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
    };

    this.userService.login(user)
      .subscribe((value: boolean) => {
        if (value) {
          this.snackBar.open('You logged in');
        } else {
          this.snackBar.open('You are not logged in');
        }
      });
  }
}
