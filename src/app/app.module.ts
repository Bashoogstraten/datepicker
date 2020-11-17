import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { FormDemoComponent } from './components/form-demo/form-demo.component';

let routes: Route[] = [
  { path: 'datepicker', component: DatePickerComponent },
  { path: 'formdemo', component: FormDemoComponent }
];

@NgModule({
  declarations: [
    AppComponent, DatePickerComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
