import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '@firebase/auth-types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly storageKey = 'firebase_user_data';

  private user?: User | null;
  get userLoggedIn() {
    return !!this.user;
  }

  get accessToken() {
    return '';
  }

  constructor(private httpClient: HttpClient, private firebase: AngularFireAuth) { }

  async signIn(email: string, password: string) {
    const userData = await this.firebase.signInWithEmailAndPassword(email, password);
    this.user = userData.user as User;
    localStorage.setItem(this.storageKey, JSON.stringify(this.user));
    return this.user;
  }

  async signUp(email: string, password: string) {
    const user = await this.firebase.createUserWithEmailAndPassword(email, password);
    this.user = user.user as User;
    localStorage.setItem(this.storageKey, JSON.stringify(this.user));
    return this.user;
  }

  resetPassword(email: string) {
    return this.firebase.sendPasswordResetEmail(email);
  }

  authenticateUserFromPreviousSession() {
    if (this.userLoggedIn) {
      return;
    }

    const userData = localStorage.getItem(this.storageKey);
    if (!userData) { return; }

    this.user = JSON.parse(userData);
    // return this.refreshToken();
  }

  logOut() {
    localStorage.removeItem(this.storageKey);
    this.user = null;
  }

  /* refreshToken() {
    if (!this.user?.refreshToken) {
      return of({});
    }

    const url = `https://securetoken.googleapis.com/v1/token?key=${environment.firebaseConfig.apiKey}`;
    const data = {
      grant_type: 'refresh_token',
      refresh_token: this.user?.refreshToken
    };

    return this.httpClient.post(url, data).pipe(tap((response: any) => this.user!.idToken = response.idToken));
  }


  private authenticateHelper(operation: AuthOperation, payload: any) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${operation}?key=${environment.firebaseConfig.apiKey}`;

    return this.httpClient.post(url, payload).pipe(tap(response => {
      if (operation == AuthOperation.signIn || operation == AuthOperation.signUp) {
        localStorage.setItem(this.storageKey, JSON.stringify(response));
        this.user = response as SignInResponseModel;
      }
    }));
  } */
}
