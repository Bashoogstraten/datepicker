import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({ providedIn: 'root' })
export class ContactServiceService {

  private url = 'http://localhost:9080/restApp_war_exploded/resources/contacts';

  contactsUpdated$ = new Subject<Contact[]>();

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    this.http.get<Contact[]>(this.url).subscribe(contacts => this.contactsUpdated$.next(contacts));
    return this.contactsUpdated$;
  }

  add(c: Contact): void {
    this.http.post<Contact[]>(this.url, c)
      .subscribe(() => this.getContacts());
  }

  delete(c: Contact): void {
    this.http.delete(`${this.url}/${c.id}`)
      .subscribe(() => this.getContacts());
  }
}
