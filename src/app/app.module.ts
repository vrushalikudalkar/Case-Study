import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductsService } from './route2/products.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list'
import { HttpClientModule } from '@angular/common/http';
import { Route3Component } from './route3/route3.component';
import { TimerComponent } from './route3/timer/timer.component';
import { TimeLimitComponent } from './route3/time-limit/time-limit.component';
import { TimeStampsComponent } from './route3/time-stamps/time-stamps.component';
import { CountComponent } from './route3/count/count.component'
import { FormsModule } from '@angular/forms';
import { Route5Component } from './route5/route5.component';
import { Route6Component } from './route6/route6.component';
import { Route4Component } from './route4/route4.component';
import { Timer2Component } from './route4/timer2/timer2.component';
import { TimeStamps2Component } from './route4/time-stamps2/time-stamps2.component';
import { TimeLimit2Component } from './route4/time-limit2/time-limit2.component';
import { Count2Component } from './route4/count2/count2.component';

@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    Route2Component,
    Route3Component,
    TimerComponent,
    TimeLimitComponent,
    TimeStampsComponent,
    CountComponent,
    Route5Component,
    Route6Component,
    Route4Component,
    Timer2Component,
    TimeStamps2Component,
    TimeLimit2Component,
    Count2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
