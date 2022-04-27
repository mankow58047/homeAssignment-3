import { Component, OnInit, Input } from '@angular/core';

import { ContactService } from '../contact.service';
import { Contact } from '../contacts';
import { CONTACT } from '../mock-contacts';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent{
 
  @Input()
  contact!: { fName: string; lName: string; pNumber: string; email: string; };

intContacts: Contact[] = [];

//   intContacts = [
//     { 
//     fName: 'John', 
//     lName: 'Doe', 
//     pNumber: '701-555-1234', 
//     email: 'jdoe@email.com'
// },
//     { 
//     fName: 'Jane', 
//     lName: 'Doe', 
//     pNumber: '701-555-7894', 
//     email: 'janedoe@email.com'
// },
//   {
//     fName: 'Sara',
//     lName: 'Jones',
//     pNumber: '701-555-4561',
//     email: 'sjones@email.com'
//    }
// ];

  constructor(private contactService: ContactService) { }

  getContacts(): void {
    this.contactService.getContacts()
    .subscribe(intContacts => this.intContacts = intContacts);
  }

  ngOnInit(): void {
    this.getContacts();
  }

}
