import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {TimerService} from '../timer.service';

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
    this.counter = this.init;
    this.doCountdown();
    }
  }

  doCountdown() {
    setTimeout(() => {
      this.counter = this.counter - 1;
      if (this.counter < 61 && this.counter > 30) {
        this.colour = 'warning';
      } else if (this.counter < 31) {
        this.colour = 'danger';
      }
      this.processCountdown();
    }, 1000);
  }

  processCountdown() {
    // emit event on number change
    console.log('count is ', this.counter);

    if (this.counter === 0) {
      // emit event when counter reaches 0
      console.log('--counter end--');
    } else {
      this.doCountdown();
    }
  }

  getCounterValue() {
    console.log(`we're returning: ${this.counter}`);
    return this.counter;
  }

  constructor(private timerService: TimerService) {}
}
