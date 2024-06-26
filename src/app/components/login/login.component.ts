import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginErrored = false;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  login(email: string, password: string) {
    this.authService.signIn(email, password).
    then((result) => this.router.navigate(['/assistant']))
    .catch(() => this.loginErrored = true);
  }
}
