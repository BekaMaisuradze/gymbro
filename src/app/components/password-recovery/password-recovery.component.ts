import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent {
  emailSent = false;
  errored = false;

  constructor(private authService: AuthService) { }

  sendEmail(email: string) {
    this.authService.resetPassword(email)
    .then(() => this.emailSent = true)
    .catch(() => this.errored = true);
  }
}
