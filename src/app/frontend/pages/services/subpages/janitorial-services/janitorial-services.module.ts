import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JanitorialServicesRoutingModule } from './janitorial-services-routing.module';
import { JanitorialServicesComponent } from './janitorial-services.component';
import { SharedModule } from '../../../../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    JanitorialServicesRoutingModule,
    SharedModule
  ],
  declarations: [JanitorialServicesComponent]
})
export class JanitorialServicesModule { }
