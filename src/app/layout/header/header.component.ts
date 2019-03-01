import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private media: MediaObserver) {
    this.media.media$.subscribe((a) => {
      console.log({ a });
    });
    console.log(
      this.media.isActive('md')
    )
  }
}
