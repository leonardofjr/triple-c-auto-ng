import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ServiceAreasComponent } from './service-areas/service-areas.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FreeQuoteComponent } from './free-quote/free-quote.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'service-areas', component: ServiceAreasComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'free-quote', component: FreeQuoteComponent }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})


export class AppRoutingModule { }
