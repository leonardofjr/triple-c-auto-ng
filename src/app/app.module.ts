import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ServicesComponent } from './frontend/pages/services/services.component';
import { HomeComponent } from './frontend/pages/home/home.component';
import { OurFeaturesComponent } from './frontend/components/our-features/our-features.component';
import { SliderComponent } from './frontend/components/slider/slider.component';
import { CleaningGuaranteeComponent } from './frontend/components/cleaning-guarantee/cleaning-guarantee.component';
import { ServiceAreasComponent } from './frontend/pages/service-areas/service-areas.component';
import { PrimaryMenuComponent } from './frontend/components/menus/primary-menu/primary-menu.component';
import { KeepHtmlPipe } from './pipes/keep-html.pipe';
import { FloorRejuvenationDiscountComponent } from './frontend/components/floor-rejuvenation-discount/floor-rejuvenation-discount.component';
import { SharedModule } from './shared.module';
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HomeComponent,
    OurFeaturesComponent,
    SliderComponent,
    CleaningGuaranteeComponent,
    ServiceAreasComponent,
    PrimaryMenuComponent,
    KeepHtmlPipe,
    FloorRejuvenationDiscountComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
