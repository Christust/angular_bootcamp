import { Component, OnInit } from '@angular/core';
import {
  IRandomContact,
  Results,
} from 'src/app/models/interfaces/RandomUser.interface';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss'],
})
export class RandomContactPageComponent implements OnInit {
  contact: IRandomContact | undefined;
  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.randomUserService.obtenerRandomcontact().subscribe({
      next: (response: Results) => {
        this.contact = response.results[0];
      },
    });
  }

  obtenerNuevoContacto() {
    this.randomUserService.obtenerRandomcontact().subscribe({
      next: (response: Results) => {
        this.contact = response.results[0];
      },
      error: (error) => {
        console.error(`${error}`);
      },
    });
  }

  obtenerListaContactos(n: number) {
    this.randomUserService.obtenerRandomcontacts(n).subscribe({
      next: (response: Results) => {
        console.log(response);
      },
      error: (error) => {
        console.error(`${error}`);
      },
    });
  }
}
