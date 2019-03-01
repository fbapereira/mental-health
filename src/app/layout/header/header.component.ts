import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user$ = this.userService.user$;
  user: User;

  constructor(private media: MediaObserver, private userService: UserService) {
    this.userService.user$.subscribe((a) => {
      this.user = a;
    });
  }
  logout(): void {
    this.userService.logout();
  }
}
