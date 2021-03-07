import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './../app/app/app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home/home.component';
import { ZeichenketteComponent } from './zeichenkette/zeichenkette/zeichenkette.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, ZeichenketteComponent],
  imports: [
    // core
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
