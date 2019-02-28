import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, of, combineLatest } from 'rxjs';
import { Publication } from '../models/publication.model';
import { map, tap, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(
    private db: AngularFirestore,
    private userService: UserService,
  ) {
  }

  get(): Observable<Publication[]> {
    const publications$ = this.db.collection<Publication>(`publications/`, ref => ref.limit(10)).valueChanges()

    return combineLatest(publications$, this.userService.users$)
      .pipe(
        map(([publications, users]) => {
          publications.forEach((publication: Publication) => {
            publication.author = users.filter((user: User) => user.uid === publication.author.uid)[0] as User;
          });
          return publications;
        }));
  }
}
