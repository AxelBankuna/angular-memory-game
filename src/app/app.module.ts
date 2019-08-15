import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardsService } from './cards.service';
import { TimerComponent } from './timer/timer.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { TimerService } from './timer.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserNameModalComponent } from './user-name-modal/user-name-modal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  exports: [AppComponent],
  declarations: [
    AppComponent,
    CardComponent,
    TimerComponent,
    UserNameModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownTimerModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CardsService,
    TimerComponent,
    TimerService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
