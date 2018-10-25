import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloorMaintenanceRoutingModule } from './floor-maintenance-routing.module';
import { FloorMaintenanceComponent } from './floor-maintenance.component';

@NgModule({
  imports: [
    CommonModule,
    FloorMaintenanceRoutingModule
  ],
  declarations: [FloorMaintenanceComponent]
})
export class FloorMaintenanceModule { }
