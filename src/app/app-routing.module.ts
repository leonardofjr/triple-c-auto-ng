import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frontend/pages/home/home.component';
import { ServicesComponent } from './frontend/pages/services/services.component';
import { GreenCleaningServicesComponent } from './frontend/pages/services/subpages/green-cleaning-services/green-cleaning-services.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'about', loadChildren: './frontend/pages/about/about.module#AboutModule' },
  { path: 'services', component: ServicesComponent, 
    children: [
      {path: "janitorial-services", loadChildren: './frontend/pages/services/subpages/janitorial-services/janitorial-services.module#JanitorialServicesModule'},
      { path: "green-cleaning-services", loadChildren: './frontend/pages/services/subpages/green-cleaning-services/green-cleaning-services.module#GreenCleaningServicesModule'},
      { path: "floor-maintenance", loadChildren: './frontend/pages/services/subpages/floor-maintenance/floor-maintenance.module#FloorMaintenanceModule'}
    ] 
  },
  { path: 'our-difference', loadChildren:'./frontend/pages/our-difference/our-difference.module#OurDifferenceModule'},
  { path: 'our-clients', loadChildren: './frontend/pages/our-clients/our-clients.module#OurClientsModule' },
  { path: 'contact', loadChildren: './frontend/pages/contact/contact.module#ContactModule' }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})


export class AppRoutingModule { }
