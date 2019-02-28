import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { User } from '../models/user.model';
import { from, Observable } from 'rxjs';

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
}
