import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/interfaces/Contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit {
  contactList: IContact[] = [
    {
      id: 1,
      name: 'Chre',
      last_name: 'Marr',
      age: 25,
      email: 'ch@q.com',
    },
    {
      id: 2,
      name: 'Chre2',
      last_name: 'Marr2',
      age: 22,
      email: 'ch2@q.com',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
