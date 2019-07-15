import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { TimerComponent } from './timer.component';
import { TimerService } from '../timer.service';
import { DebugElement } from '@angular/core';
import {init} from 'protractor/built/launcher';
import { By } from '@angular/platform-browser';
import {AppComponent} from "../app.component";

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('startCountdown', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerComponent ],
      providers: [AppComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.startCountdown();
    debugElement = fixture.debugElement.query(By.css('h1'));
    htmlElement = debugElement.nativeElement;
  });

  xit('should have the init value of the counter and start the counter', fakeAsync(() => {
    tick(1000);
    const timerService = fixture.debugElement.injector.get(AppComponent);
    expect(htmlElement.textContent).toBe('120');
  }));
});
