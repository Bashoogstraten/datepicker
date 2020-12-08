import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactServiceService } from 'src/app/services/contact-service.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactList: Contact[];

  constructor(private contactService: ContactServiceService){}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(contacts => {this.contactList = contacts; });
  }

  delete(c: Contact): void {
    this.contactService.delete(c);
  }

  edit(c: Contact): void {
    c.edit = !c.edit;
  }

}
