import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frontend/pages/home/home.component';
import { PayNowComponent } from './frontend/pages/pay-now/pay-now.component';
import { ServicesComponent } from './frontend/pages/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'pay-now', component: PayNowComponent },
  { path: 'contact', loadChildren: './frontend/pages/contact/contact.module#ContactModule' }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})


export class AppRoutingModule { }
