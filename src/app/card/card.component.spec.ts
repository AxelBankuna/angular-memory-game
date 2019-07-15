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

describe('flipAllCards', () => {
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

  it('should flip all the cards over', () => {
    component.flipAllCards();
    expect(component.frontCard[0].matched).toBe(true);
  });
});
