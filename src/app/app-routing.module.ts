import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ServiceAreasComponent } from './service-areas/service-areas.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { ContactComponent } from './contact/contact.component';

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
