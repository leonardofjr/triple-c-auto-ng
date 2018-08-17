import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { FreeQuoteComponent } from './free-quote/free-quote.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'customer-care', component: CustomerCareComponent },
  { path: 'our-clients', component: OurClientsComponent },
  { path: 'free-quote', component: FreeQuoteComponent }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})


export class AppRoutingModule { }
