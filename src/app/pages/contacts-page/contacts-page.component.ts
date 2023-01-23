import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/interfaces/Contact.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit {
  filter: string = 'all';
  contactList: IContact[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactoService
  ) {}

  // Ejemplo de paso de info  por medio del esado
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params.filter) {
        this.filter = params.filter;
      }
      this.contactService
        .obtenerContactos(this.filter)
        .then((res) => {
          this.contactList = res;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  pasarContacto(contact: IContact) {
    let nagivationExtras: NavigationExtras = {
      state: {
        data: contact,
      },
    };
    this.router.navigate(['home'], nagivationExtras);
  }
}
