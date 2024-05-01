import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  route!: string;

  constructor(
    public auth: AuthService,
    private router: Router,
    public location: Location) {}

  logout() {
    this.auth.logOut();
    this.router.navigate(['welcome']);
  }
}
