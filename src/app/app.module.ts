import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { FormDemoComponent } from './components/form-demo/form-demo.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

const routes: Route[] = [
  { path: 'datepicker', component: DatePickerComponent },
  { path: 'formdemo', component: FormDemoComponent }
];

@NgModule({
  declarations: [
    AppComponent, DatePickerComponent, FormDemoComponent, ContactFormComponent, ContactListComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
