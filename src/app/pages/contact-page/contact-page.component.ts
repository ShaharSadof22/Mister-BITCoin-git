import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from '../../models/contact.model';


import { contactService } from 'src/app/services/contact.service'

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  subscription: Subscription
  contacts: Contact[] = []

  constructor(private contactService: contactService) { }

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts
    })
  }
  onFilterHandler(filterBy) {
    this.contactService.loadContacts(filterBy)
  }
  
}
