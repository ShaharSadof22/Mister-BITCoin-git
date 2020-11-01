import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { contactService } from 'src/app/services/contact.service'


import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {
  
  contact: Contact
  showMovesFrom: string

  constructor(private route: ActivatedRoute, private location: Location, public contactService: contactService) { }

  ngOnInit(): void {
    this.contact = this.route.snapshot.data.contact
    this.showMovesFrom = this.contact.name
  }

  onBack() {
    this.location.back()
  }

  onRemoveContact(){
    this.contactService.deleteContact(this.contact._id)

    this.location.back()
  }

}
