import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})

export class FormDemoComponent {

  persons: Person[] = [
    new Person('Sam', 'Smith', 'sam.smith@music.com'),
    new Person('Frank', 'Muscles', 'frank@muscles.com'),
    new Person('Eddy', 'Valentino', 'eddy@valfam.co.uk')
  ]

  contacts: Contact[] = [
    { firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
  ];

  newContact = new Person();

  addContact() {
    this.persons.push(this.newContact);
    this.newContact = new Person();
  }

}
