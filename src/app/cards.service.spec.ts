import {inject, TestBed} from '@angular/core/testing';

import { CardsService } from './cards.service';
import {TimerService} from './timer.service';

describe('CardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardsService = TestBed.get(CardsService);
    expect(service).toBeTruthy();
  });

  it('should have a getFrontCard function',
    inject([CardsService], (service: CardsService) => {
      expect(service.getFrontCard).toBeTruthy();
    }));

  it('should have a createPairs function',
    inject([CardsService], (service: CardsService) => {
      expect(service.createPairs).toBeTruthy();
    }));

  it('should have a shuffle function',
    inject([CardsService], (service: CardsService) => {
      expect(service.shuffle).toBeTruthy();
    }));

  it('should have a addIndex function',
    inject([CardsService], (service: CardsService) => {
      expect(service.addIndex).toBeTruthy();
    }));
});
