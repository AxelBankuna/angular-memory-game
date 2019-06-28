import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  public counter = 0;

  constructor() { }

  getCounter() {
    return  this.counter;
  }

}
