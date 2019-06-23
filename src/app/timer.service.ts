import {Injectable, Input} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  @Input() init: number = null;
  public  counter = 0;

  constructor() { }

  startCountdown() {
    // if (this.init && this.init > 0) {
      this.counter = 10;
      this.doCountdown();
    // }
  }

  doCountdown() {
    setTimeout(() => {
      this.counter = this.counter - 1;
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

  get getCounter() {
    return this.counter;
  }
}
