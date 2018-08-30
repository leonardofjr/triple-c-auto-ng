import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './frontend/pages/about/about.component';
import { HomeComponent } from './frontend/pages/home/home.component';
import { ServicesComponent } from './frontend/pages/services/services.component';
import { ServiceAreasComponent } from './frontend/pages/service-areas/service-areas.component';
import { OurClientsComponent } from './frontend/pages/our-clients/our-clients.component';
import { ContactComponent } from './frontend/pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'service-areas', component: ServiceAreasComponent },
  { path: 'our-clients', component: OurClientsComponent },
  { path: 'contact', component: ContactComponent }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})


export class AppRoutingModule { }
