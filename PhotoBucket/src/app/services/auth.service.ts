import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import 'rosefire';
import * as firebase from 'firebase/app';
import { environment } from "environments/environment";

@Injectable()
export class AuthService {

  public isSignedInStream: Observable<boolean>;
  public displayNameStream: Observable<string>;
    public _currentUserUid: string;
  
  constructor(private afAuth: AngularFireAuth,
    private router: Router) {
      this.afAuth.authState.subscribe( (user: firebase.User) => { 
      if (user) {
        console.log("Signed in as ", user);
        this._currentUserUid = user.uid;
      } else {
        console.log("User not signed in");
        this._currentUserUid = '';
      }
     });

    this.isSignedInStream = this.afAuth.authState
      .map<firebase.User, boolean>( (user: firebase.User) => { 
        return user != null;
    });

    this.displayNameStream = this.afAuth.authState
    .map<firebase.User, string>( (user: firebase.User) => { 
      if (user) {
        return user.displayName || user.uid;
      } else {
        return '';
      }
    });
  }

  get currentUserUid(): string {
    return this._currentUserUid;
  }

  signInWithGoogle(): void {
     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result: any) => { 
        const user: firebase.User = result.user;
        this.router.navigate(['/']); 
      })
  }

  signInWithRosefire(): void {
    Rosefire.signIn(environment.registryToken, (error, rfUser: RosefireUser) => {
    if (error) {
      // User not logged in!
      console.error(error);
      return;
    }
    // console.log("Rosefire is done. User: ", rfUser);
    this.afAuth.auth.signInWithCustomToken(rfUser.token).then( (authState) => { 
      // console.log("Firebase signin is done now. User: ", authState);
      this.router.navigate(["/"]);
      });
    });
  }


  signOut(): void {
     this.afAuth.auth.signOut();
     this.router.navigate(['/signin']);
  }

}
