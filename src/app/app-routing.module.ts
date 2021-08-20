import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './Mycomponents/view/view.component';
import { NavComponent } from './Mycomponents/nav/nav.component';
import { HomeComponent } from './Mycomponents/home/home.component';
import {MyComponent} from './Mycomponents/my/my.component'

const routes: Routes = [
  {path:" ", redirectTo:"home",pathMatch:"full"},
  { path:"view-customer", component:ViewComponent},
  { path:"home", component:HomeComponent},
  { path:"nav", component:NavComponent},
  { path:"myaccount", component:MyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
