import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContact } from 'src/app/models/interfaces/Contact.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss'],
})
export class ListaContactosComponent implements OnInit, OnDestroy {
  // Creamos una lista de contactos:
  contactList: IContact[] = [];

  // Suscripcion del servicio
  subscription: Subscription | undefined;

  selectedContact: IContact | undefined;
  // Para usar un servicio debemos inyectarlo en el constructor
  constructor(private contactService: ContactoService) {}

  ngOnInit(): void {
    // Obtener la lista de contactos:
    this.contactService
      .obtenerContactos()
      .then((lista: IContact[]) => (this.contactList = lista))
      .catch((error) => console.log(`Hubo un error: ${error}`))
      .finally(() => console.log('Peticion terminada'));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  obtenerContacto(id: number) {
    this.subscription = this.contactService
      .obtenerContactoPorId(id)
      ?.subscribe({
        next: (contact: IContact) => (this.selectedContact = contact),
      });
    console.log(this.selectedContact);
  }
}
