import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreenCleaningServicesComponent } from './green-cleaning-services.component';

const routes: Routes = [
  { path: '', 
    component: 
    GreenCleaningServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreenCleaningServicesRoutingModule { }
