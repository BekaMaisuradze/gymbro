import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  errored = false;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  signUp(email: string, password: string) {
    this.authService.signUp(email, password)
      .then(result => this.router.navigate(['/assistant']))
      .catch(() => this.errored = true);
  }
}
