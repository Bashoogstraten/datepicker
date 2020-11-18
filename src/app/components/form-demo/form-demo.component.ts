import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})

export class FormDemoComponent {


  contacts: Contact[] = [
    { firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
  ];

  newContact = {} as Contact;

  addContact(): void {
    this.contacts.push(this.newContact);
    this.newContact = {} as Contact;
    console.log(this.newContact);
  }

  delete(c: Contact): void {
    const i = this.contacts.indexOf(c);
    this.contacts.splice(i, 1);
  }

}
