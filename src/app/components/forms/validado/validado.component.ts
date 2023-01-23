import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validado',
  templateUrl: './validado.component.html',
  styleUrls: ['./validado.component.scss'],
})
export class ValidadoComponent implements OnInit {
  validatedForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.validatedForm = this.formBuilder.group({
      // Campo requerido
      name: ['', Validators.required],
      // Campo sin validaciones
      last_name: '',
      // Campo con composicion de validaciones
      age: [
        '',
        Validators.compose([
          Validators.required,
          Validators.min(18),
          Validators.max(99),
        ]),
      ],
      // Campo email
      email: ['', Validators.compose([Validators.required, Validators.email])],
      // Campo con expresion regular
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z]*'),
        ]),
      ],
      accept: [false, Validators.requiredTrue],
    });
  }

  get nameForm() {
    return this.validatedForm.get('name');
  }

  get lastNameForm() {
    return this.validatedForm.get('last_name');
  }
  get emailForm() {
    return this.validatedForm.get('email');
  }
  get ageForm() {
    return this.validatedForm.get('age');
  }
  get passwordForm() {
    return this.validatedForm.get('password');
  }
  get acceptForm() {
    return this.validatedForm.get('accept');
  }

  // Metodo de submit del form
  submitForm() {
    if (this.validatedForm.valid) {
      console.log(this.validatedForm.value);
      this.validatedForm.reset();
    }
  }
}
