import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./home-page.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ]
})
export class HomePageModule { }
