import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { ContactServiceService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {

  addContactForm = new FormGroup({
    // all fields
    firstName: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.pattern('^.+@.+\.nl$'))
  });

  contacts: Contact[];

  constructor(private contactService: ContactServiceService) { }

  // ngOnInit(): void {
  //   this.contactService.getContacts().subscribe(contacts => {this.contacts = contacts; });
  // }

  addContact(): void {
    this.contactService.add(this.addContactForm.value);
    console.log('Submitted value:', this.addContactForm.value);
  }

}
