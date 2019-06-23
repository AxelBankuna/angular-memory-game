import {Component, ViewChild, OnInit} from '@angular/core';
import {TimerComponent} from './timer/timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'memory-game';

  ngOnInit() {
  }
}
