import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FloorMaintenanceComponent } from './floor-maintenance.component';

const routes: Routes = [
  {
    path: '',
    component: FloorMaintenanceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloorMaintenanceRoutingModule { }
