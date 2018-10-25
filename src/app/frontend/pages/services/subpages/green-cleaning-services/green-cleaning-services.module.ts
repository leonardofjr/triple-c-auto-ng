import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreenCleaningServicesRoutingModule } from './green-cleaning-services-routing.module';
import { GreenCleaningServicesComponent } from './green-cleaning-services.component';

@NgModule({
  imports: [
    CommonModule,
    GreenCleaningServicesRoutingModule,
  ],
  declarations: [GreenCleaningServicesComponent]
})
export class GreenCleaningServicesModule { }
