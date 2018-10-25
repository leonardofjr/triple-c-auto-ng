import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ServicesComponent } from './frontend/pages/services/services.component';
import { HomeComponent } from './frontend/pages/home/home.component';
import { PrimaryMenuComponent } from './frontend/components/menus/primary-menu/primary-menu.component';
import { KeepHtmlPipe } from './pipes/keep-html.pipe';
import { SharedModule } from './shared.module';
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HomeComponent,
    PrimaryMenuComponent,
    KeepHtmlPipe,
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
