import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallToActionComponent } from './frontend/components/call-to-action/call-to-action.component';
import { ContactFormComponent } from './frontend/components/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    RecaptchaModule.forRoot()

  ],
  declarations: [
    CallToActionComponent, 
    ContactFormComponent],
  exports: [
    ContactFormComponent,
    CallToActionComponent]
})
export class SharedModule { }
