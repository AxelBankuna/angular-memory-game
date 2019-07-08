import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { CardComponent } from './card.component';
import { CardsService } from '../cards.service';
import { TimerComponent } from '../timer/timer.component';
import {TimerService} from '../timer.service';

describe('CardComponent', () => {
  let component: CardComponent = new CardComponent(new CardsService(), new TimerService(), new TimerComponent(new TimerService()));
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ CardsService, TimerComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('getCounterValue', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ CardsService, TimerComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return the value of the counter before being initialised', fakeAsync(() => {
    component.first.flipped = true;
    component.second.flipped = true;
    component.resetFlips();
    tick(900);
    expect(component.first.flipped).toBe(false);
  }));
});
