import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {CardsService} from './cards.service';
import { TimerComponent } from './timer/timer.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import {TimerService} from './timer.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownTimerModule
  ],
  providers: [
    CardsService,
    TimerComponent,
    TimerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
