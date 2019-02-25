import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mental-health';
  constructor(private snackBar: MatSnackBar) {}

  test(){
    this.snackBar.open(`I Love You My Sardain!`, `OKAY`, {
      duration: 2000,
    });
  }
}
