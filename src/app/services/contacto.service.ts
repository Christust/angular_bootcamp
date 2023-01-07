import { Injectable } from '@angular/core';
import { CONTACTS } from '../mocks/contacts.mock';
import { IContact } from '../models/interfaces/Contact.interface';

// Importamos Observable de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor() {}

  obtenerContactos(): Promise<IContact[]> {
    return Promise.resolve(CONTACTS);
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
