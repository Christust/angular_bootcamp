import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-anidado',
  templateUrl: './anidado.component.html',
  styleUrls: ['./anidado.component.scss'],
})
export class AnidadoComponent implements OnInit {
  nestForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const tel = this.formBuilder.group({
      prefijo: '',
      number: '',
    });

    const movil = this.formBuilder.group({
      prefijo: '',
      number: '',
    });

    // Agrupamos el form:
    this.nestForm = this.formBuilder.group({
      tel,
      movil,
    });
  }
}
