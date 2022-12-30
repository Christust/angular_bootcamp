import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
})
export class SaludoComponent implements OnInit {
  @Input() nombre: string = 'Usuario';

  @Output() mensajeEmiter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    console.log('Hola desde Saludo component');
  }

  alertaSaludo(): void {
    this.mensajeEmiter.emit(
      `Hola, ${this.nombre}. Alerta despachada desde un click en Saludo`
    );
  }
}
