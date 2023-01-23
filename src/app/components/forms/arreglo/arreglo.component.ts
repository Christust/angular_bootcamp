import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-arreglo',
  templateUrl: './arreglo.component.html',
  styleUrls: ['./arreglo.component.scss'],
})
export class ArregloComponent implements OnInit {
  arrayForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.arrayForm = this.formBuilder.group({
      name: '',
      last_name: '',
      tels: this.formBuilder.array([]), // Iniciamos la lista vacia
    });
  }

  // Getter para obtener el formarray de la lista de telefonos
  get telsForm(): FormArray {
    return this.arrayForm.get('tels') as FormArray;
  }

  // Metodo para añadir telefonos
  addTel() {
    const tel = this.formBuilder.group({
      prefijo: '',
      number: '',
    });
    this.telsForm.push(tel);
  }

  // Metodo para eliminar telefonos de la lista
  deleteTel(index: number) {
    this.telsForm.removeAt(index);
  }
}
