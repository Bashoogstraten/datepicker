import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  @Input() contactList: Contact[];

  delete(c: Contact): void {
    const i = this.contactList.indexOf(c);
    this.contactList.splice(i, 1);
  }

}
