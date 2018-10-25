import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurDifferenceRoutingModule } from './our-difference-routing.module';
import { OurDifferenceComponent } from './our-difference.component';
import { SharedModule } from '../../../shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule, OurDifferenceRoutingModule

  ],
  declarations: [
    OurDifferenceComponent,
]
})
export class OurDifferenceModule { }
