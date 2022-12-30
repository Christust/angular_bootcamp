import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular_bootcamp';
  usuario = 'Christust';

  alertaSaludo(evento: string): void {
    alert(evento);
  }
}
