// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRouteComponent } from "./home-route/home-route.component";
import { NavbarComponent } from './navbar/navbar.component'
import { FirstRouteComponent } from "./first-route/first-route.component";
import { SecondRouteComponent } from "./second-route/second-route.component";


const routes: Routes = [
  { path: 'home', component: HomeRouteComponent },
  { path: 'first-route', component: FirstRouteComponent },
  { path: 'second-route', component: SecondRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
