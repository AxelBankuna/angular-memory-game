import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {TimerService} from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() init: number = null;
  public  counter = 0;

  ngOnInit(): void {
    this.timerService.startCountdown();
    this.counter = this.timerService.counter;
  }

  constructor(private timerService: TimerService) {}
}
