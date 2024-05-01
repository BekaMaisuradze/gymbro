import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const routeGuard: CanActivateFn = (_route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  const isLoggedIn = authService.userLoggedIn;
  const forbiddenRoutesForAuthenticatedUser = ['/login', '/sign-up', '/password-recovery', '/'];
  const currentRoute = state.url;

  const canActivate = (isLoggedIn && !forbiddenRoutesForAuthenticatedUser.includes(currentRoute)) ||
    (!isLoggedIn && forbiddenRoutesForAuthenticatedUser.includes(currentRoute));

  if (canActivate) {
    return true;
  }

  router.navigate(['welcome']);
  return false;
};
