import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { User } from '../models/user.model';
import { from, Observable, of } from 'rxjs';
import { switchMap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
  ) {
  }

  users$ = this.db.collection(`users/`).valueChanges();

  user$: Observable<User> = this.afAuth.user.pipe(
    switchMap((user: any) => {
      if (user) {
        return this.db.doc<User>(`users/${user.uid}`).valueChanges();
      }
      return of(user);
    }),
    shareReplay(),
  );

  create(user: User): Observable<void> {
    return from(this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential: firebase.auth.UserCredential) => {
        return this.db.doc(`users/${userCredential.user.uid}`)
          .set({
            name: user.name,
            email: user.email,
            admin: false
          },
            { merge: true });
      }));
  }

  login(user: User): Observable<boolean> {
    return Observable.create(function (observer) {
      this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password)
        .then(() => { observer.next(true); })
        .catch(() => { observer.next(false); });
    });
  }

  logout(): void {
    this.afAuth.auth.signOut().then(()=>{
      console.log('LogOUt');
    });
  }
}
