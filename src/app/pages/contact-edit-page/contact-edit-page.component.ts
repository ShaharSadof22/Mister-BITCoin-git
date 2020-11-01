import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { contactService } from 'src/app/services/contact.service'

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {
  contact;
  formData;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, public contactService: contactService, private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get("id") !== 'null') {
        const contact = this.contactService.getContactById(params.get("id"))
        contact.subscribe(contact => {
          this.contact = contact
        })
        this.formData = this.formBuilder.group({
          name: this.contact.name,
          email: this.contact.email,
          phone: this.contact.phone,
          _id: this.contact._id
        });
      } 
    });

    if(!this.contact) {
      this.formData = this.formBuilder.group({
        name: '',
        email: '',
        phone: ''
      });
    }
  }

  onSubmit(formData) {

    this.formData.reset(formData);

    if (!this.formData.value.name || !this.formData.value.email || !this.formData.value.phone) {
      return
    }
    this.contactService.saveContact(this.formData.value)
    this.location.back()
  }

}
