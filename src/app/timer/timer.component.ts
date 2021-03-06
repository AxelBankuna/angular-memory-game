import { Component, Input, OnInit } from '@angular/core';
import {TimerService} from '../timer.service';
import {HighscoreService} from '../highscore.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() init: number = null;
  public  counter = this.init;

  colour = 'success';

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    if (this.init && this.init > 0) {
    this.timerService.counter = this.init;
    this.doCountdown();
    }
  }

  doCountdown() {
    setTimeout(() => {
      this.counter = this.timerService.counter;
      if (this.getGameStatus()) {
        this.counter = this.counter - 1;
      }
      if (this.counter < 61 && this.counter > 30) {
        this.colour = 'warning';
      } else if (this.counter < 31) {
        this.colour = 'danger';
      }
      this.timerService.counter = this.counter;
      this.processCountdown();
    }, 1000);
  }

  processCountdown() {
    // emit event on number change

    if (this.counter === 0 || this.timerService.getStop()) {
      // emit event when counter reaches 0
      console.log('--counter end--');
    } else {
      this.doCountdown();
    }
  }

  getCounterValue() {
    return this.counter;
  }

  constructor(private timerService: TimerService, private highscoreService: HighscoreService) {}

  getGameStatus() {
    return this.highscoreService.getGameStatus();
  }
}
