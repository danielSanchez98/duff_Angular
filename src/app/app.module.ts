import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {AgeValidationService} from './services/age-validation.service'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AgeValidationComponent } from './components/age-validation/age-validation.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { NosotrosContentComponent } from './components/nosotros-content/nosotros-content.component';
import { CervezasContentComponent } from './components/cervezas-content/cervezas-content.component';
import { TourContentComponent } from './components/tour-content/tour-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AgeValidationComponent,
    HomeContentComponent,
    NosotrosContentComponent,
    CervezasContentComponent,
    TourContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AgeValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
