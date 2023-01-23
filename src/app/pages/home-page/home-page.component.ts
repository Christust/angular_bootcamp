import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/interfaces/Contact.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  selectedContact: IContact | undefined;
  token: string | null = null;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    if (history.state.data) {
      this.selectedContact = history.state.data;
    }
  }

  navegarAContacts() {
    this.router.navigate(['contacts']);
  }
}
