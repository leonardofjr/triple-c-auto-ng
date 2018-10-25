import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurDifferenceComponent } from './our-difference.component';

const routes: Routes = [
  {
    path: '',
    component: OurDifferenceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurDifferenceRoutingModule { }
