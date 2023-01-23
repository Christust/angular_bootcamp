import { Injectable } from '@angular/core';
import { CONTACTS } from '../mocks/contacts.mock';
import { IContact } from '../models/interfaces/Contact.interface';

// Importamos Observable de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  contactList: IContact[] = CONTACTS;
  constructor() {}

  obtenerContactos(sex?: string): Promise<IContact[]> {
    if (sex == 'men' || sex == 'women') {
      let contactListFiltered: IContact[] = this.contactList.filter(
        (contact) => {
          return contact.sex == sex;
        }
      );
      return Promise.resolve(contactListFiltered);
    } else if (sex == 'all') {
      return Promise.resolve(this.contactList);
    }
    return Promise.reject('Filtro no valido');
  }

  obtenerContactoPorId(id: number): Observable<IContact> | undefined {
    const contact = CONTACTS.find((contact: IContact) => contact.id === id);

    // Creamos el obserbable
    let observable: Observable<IContact> = new Observable((observer) => {
      observer.next(contact); // Emitimos un valor a todo componente suscrito
      observer.complete(); // No emitimos mas valores
    });
    if (contact) {
      return observable;
    }
    return;
  }
}
