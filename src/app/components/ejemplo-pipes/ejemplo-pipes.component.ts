import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss'],
})
export class EjemploPipesComponent implements OnInit {
  dob: Date = new Date(1991, 9, 4);
  constructor() {}

  ngOnInit(): void {}
}
