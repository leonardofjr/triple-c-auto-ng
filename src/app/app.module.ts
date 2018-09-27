import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './frontend/pages/about/about.component';
import { ServicesComponent } from './frontend/pages/services/services.component';
import { HomeComponent } from './frontend/pages/home/home.component';
import { OurFeaturesComponent } from './frontend/components/our-features/our-features.component';
import { ContactComponent } from './frontend/pages/contact/contact.component';
import { ContactFormComponent } from './frontend/components/contact-form/contact-form.component';
import { SliderComponent } from './frontend/components/slider/slider.component';
import { OurClientsComponent } from './frontend/pages/our-clients/our-clients.component';
import { CleaningGuaranteeComponent } from './frontend/components/cleaning-guarantee/cleaning-guarantee.component';
import { ServiceAreasComponent } from './frontend/pages/service-areas/service-areas.component';
import { PrimaryMenuComponent } from './frontend/components/menus/primary-menu/primary-menu.component';
import { KeepHtmlPipe } from './pipes/keep-html.pipe';
import { FixedFreeQuoteFormComponent } from './frontend/components/fixed-free-quote-form/fixed-free-quote-form.component';
import { CallToActionComponent } from './frontend/components/call-to-action/call-to-action.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { FloorRejuvenationDiscountComponent } from './frontend/components/floor-rejuvenation-discount/floor-rejuvenation-discount.component';
import { JanitorialServicesComponent } from './frontend/pages/services/subpages/janitorial-services/janitorial-services.component';
import { FloorMaintenanceComponent } from './frontend/pages/services/subpages/floor-maintenance/floor-maintenance.component';
import { GreenCleaningServicesComponent } from './frontend/pages/services/subpages/green-cleaning-services/green-cleaning-services.component';
import { OurDifferenceComponent } from './frontend/pages/our-difference/our-difference.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    HomeComponent,
    OurFeaturesComponent,
    ContactComponent,
    ContactFormComponent,
    SliderComponent,
    OurClientsComponent,
    CleaningGuaranteeComponent,
    ServiceAreasComponent,
    PrimaryMenuComponent,
    KeepHtmlPipe,
    FixedFreeQuoteFormComponent,
    CallToActionComponent,
    FloorRejuvenationDiscountComponent,
    JanitorialServicesComponent,
    FloorMaintenanceComponent,
    GreenCleaningServicesComponent,
    OurDifferenceComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecaptchaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
