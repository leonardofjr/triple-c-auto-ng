import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FreeQuoteComponent } from './free-quote/free-quote.component';
import { HomeComponent } from './home/home.component';
import { OurCoreValuesComponent } from './home/our-core-values/our-core-values.component';
import { OurFeaturesComponent } from './home/our-features/our-features.component';
import { WhyChooseUsComponent } from './home/why-choose-us/why-choose-us.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SliderComponent } from './slider/slider.component';
import { OurVisionComponent } from './about/our-vision/our-vision.component';
import { AboutUsIntroductionComponent } from './about/about-us-introduction/about-us-introduction.component';
import { CommercialCleaningComponent } from './about/commercial-cleaning/commercial-cleaning.component';
import { WhatWeDoComponent } from './services/what-we-do/what-we-do.component';
import { ServicesOverviewComponent } from './services/services-overview/services-overview.component';
import { GreenCleaningComponent } from './services/green-cleaning/green-cleaning.component';
import { CleaningServicesListComponent } from './services/cleaning-services-list/cleaning-services-list.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { OurProductsComponent } from './customer-care/our-products/our-products.component';
import { WhatWeOfferComponent } from './customer-care/what-we-offer/what-we-offer.component';
import { HighQualityComponent } from './customer-care/high-quality/high-quality.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    FreeQuoteComponent,
    HomeComponent,
    OurCoreValuesComponent,
    OurFeaturesComponent,
    WhyChooseUsComponent,
    ContactComponent,
    ContactFormComponent,
    SliderComponent,
    OurVisionComponent,
    AboutUsIntroductionComponent,
    CommercialCleaningComponent,
    WhatWeDoComponent,
    ServicesOverviewComponent,
    GreenCleaningComponent,
    CleaningServicesListComponent,
    CustomerCareComponent,
    OurClientsComponent,
    OurProductsComponent,
    WhatWeOfferComponent,
    HighQualityComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
