import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import { DemoPageComponent } from './demo-page/demo-page.component';
import {DemoPageModule} from "./demo-page/demo-page.module";
import { HomePageComponent } from './home-page/home-page.component';
import {HomePageModule} from "./home-page/home-page.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    DemoPageModule,
    HomePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
