import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular_bootcamp';
  usuario = 'Christust';
  token: string | null = null;

  constructor(private router: Router) {}

  alertaSaludo(evento: string): void {
    alert(evento);
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }
}
