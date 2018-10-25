import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JanitorialServicesComponent } from './janitorial-services.component';

const routes: Routes = [
  {
    path: '',
    component: JanitorialServicesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JanitorialServicesRoutingModule { }
