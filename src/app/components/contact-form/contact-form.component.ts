import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {

  @Input() contacts: Contact[];

  addContactForm = new FormGroup({
    // all fields
    firstName: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.pattern('^.+@.+\.nl$'))
  });

  addContact(): void {
    this.contacts.push(this.addContactForm.value);
    console.log('Submitted value:', this.addContactForm.value);
  }

}
