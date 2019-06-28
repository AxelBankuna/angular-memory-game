import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  public counter = 0;
  public stop = false;

  constructor() { }

  getCounter() {
    return  this.counter;
  }

  getStop() {
    return this.stop;
  }

}
