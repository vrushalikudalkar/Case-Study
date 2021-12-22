import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { Route3Component } from './route3/route3.component';
import { Route4Component } from './route4/route4.component';
import { Route5Component } from './route5/route5.component';
import { Route6Component } from './route6/route6.component';

const routes: Routes = [
  {path:"route1" , component:Route1Component},
  {path:"route2" , component:Route2Component},
  {path:"route3" , component:Route3Component},
  {path:"route5", component:Route5Component},
  {path:"route6", component:Route6Component},
  {path:"route4", component:Route4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
