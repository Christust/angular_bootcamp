import { Component, OnInit } from '@angular/core';
// Ejemplo basico de formulario reactivo
// FormBuilder construye el form y group es la clase que nos
// da las herramientas
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.scss'],
})
export class BasicoComponent implements OnInit {
  // Definimos nuestro formulario
  basicForm: FormGroup = new FormGroup({});

  // Inyectamos el FormBuilder
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Iniciamos los campos del formulario y sus valores por defecto:
    this.basicForm = this.formBuilder.group({
      name: '',
      last_name: '',
      email: '',
      tel: '',
      address: '',
    });

    // Nos vamos a suscribir a los cambios que ocurran en el formulario y los veremos por consola:
    this.basicForm.valueChanges.subscribe(console.log);
  }
}
