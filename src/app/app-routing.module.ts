import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './frontend/pages/about/about.component';
import { HomeComponent } from './frontend/pages/home/home.component';
import { ServicesComponent } from './frontend/pages/services/services.component';
import { JanitorialServicesComponent } from './frontend/pages/services/subpages/janitorial-services/janitorial-services.component';
import { ServiceAreasComponent } from './frontend/pages/service-areas/service-areas.component';
import { OurClientsComponent } from './frontend/pages/our-clients/our-clients.component';
import { ContactComponent } from './frontend/pages/contact/contact.component';
import { FloorMaintenanceComponent } from './frontend/pages/services/subpages/floor-maintenance/floor-maintenance.component';
import { GreenCleaningServicesComponent } from './frontend/pages/services/subpages/green-cleaning-services/green-cleaning-services.component';
import { OurDifferenceComponent } from './frontend/pages/our-difference/our-difference.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent, 
    children: [
      {path: "janitorial-services", component: JanitorialServicesComponent},
      { path: "green-cleaning-services", component: GreenCleaningServicesComponent},
      { path: "floor-maintenance", component: FloorMaintenanceComponent}
    ] 
  },
  { path: 'our-difference', component: OurDifferenceComponent },
  { path: 'our-clients', component: OurClientsComponent },
  { path: 'contact', component: ContactComponent }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})


export class AppRoutingModule { }
