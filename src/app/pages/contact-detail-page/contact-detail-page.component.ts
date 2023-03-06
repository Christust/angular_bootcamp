import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from 'src/app/models/interfaces/Contact.interface';
import { IRandomContact } from 'src/app/models/interfaces/RandomUser.interface';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss'],
})
export class ContactDetailPageComponent implements OnInit {
  id: any | undefined;
  contact: IRandomContact | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Vamos a leer los parametros:
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
      }
    });
    if (history.state.data) {
      this.contact = history.state.data;
    }
  }
}
