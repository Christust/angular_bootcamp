import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/interfaces/Contact.interface';
import {
  IRandomContact,
  Results,
} from 'src/app/models/interfaces/RandomUser.interface';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit {
  filter: string = 'all';
  listaRandomContacts: IRandomContact[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private randomUserService: RandomUserService
  ) {}

  // Ejemplo de paso de info  por medio del esado
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params.filter) {
        this.filter = params.filter;
      }
      this.randomUserService.obtenerRandomcontacts(10).subscribe({
        next: (response: Results) => {
          response.results.forEach((randomContact: IRandomContact, index) => {
            this.listaRandomContacts.push(randomContact);
          });
          console.log(this.listaRandomContacts);
        },
        error: (error) => {
          console.error(`${error}`);
        },
      });
    });
  }

  pasarContacto(contact: IRandomContact) {
    let nagivationExtras: NavigationExtras = {
      state: {
        data: contact,
      },
    };
    this.router.navigate(['home'], nagivationExtras);
  }
}
