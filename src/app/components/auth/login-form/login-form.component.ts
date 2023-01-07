import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit, OnDestroy {
  suscription: Subscription | undefined;
  constructor(private loginService: AuthService) {}

  ngOnInit(): void {
    this.suscription = this.loginService
      .login('eve.holt@reqres.in', 'cityslicka')
      .subscribe({
        next(res) {
          console.log(res);
          localStorage.setItem('token', res.token);
        },
        error(err) {
          console.error(err);
        },
        complete() {
          console.log('terminado');
        },
      });
  }

  ngOnDestroy(): void {
    this.suscription?.unsubscribe();
  }
}
