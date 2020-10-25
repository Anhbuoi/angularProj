import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DemoPageComponent} from "./demo-page/demo-page.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'demo-page',
    component: DemoPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
