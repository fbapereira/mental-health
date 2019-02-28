import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { PublicationService } from './services/publication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mental-health';
  constructor(private snackBar: MatSnackBar, private p: PublicationService) { }

  test() {
    this.p.get().subscribe((a) => {
      debugger;
      console.log(a);
    });
  }
}
