import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { contactService } from 'src/app/services/contact.service'
import { Contact } from 'src/app/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService {

  constructor(public contactService: contactService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Contact> {
    const id = route.paramMap.get('id')
    return this.contactService.getContactById(id)
  }

}
