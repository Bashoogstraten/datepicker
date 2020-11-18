import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})

export class FormDemoComponent {

  addContactForm = new FormGroup({
    // all fields
    firstName: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.pattern('^.+@.+\.nl$'))
  });

  contacts: Contact[] = [
    { firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
  ];

  addContact(): void {
    this.contacts.push(this.addContactForm.value);
    console.log('Submitted value:', this.addContactForm.value);
  }

  delete(c: Contact): void {
    const i = this.contacts.indexOf(c);
    this.contacts.splice(i, 1);
  }

}
