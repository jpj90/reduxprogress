import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MainComponent } from './main/main.component';
import { TrackComponent } from './track/track.component';
import { TrackingService } from './tracking-service/tracking.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  providers:    [ TrackingService ],
  declarations: [ AppComponent, HelloComponent, MainComponent, TrackComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
