import {inject, TestBed} from '@angular/core/testing';

import { TimerService } from './timer.service';
import {CardsService} from './cards.service';

describe('TimerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimerService = TestBed.get(TimerService);
    expect(service).toBeTruthy();
  });

  it('should have a getCounter function',
    inject([TimerService], (service: TimerService) => {
      expect(service.getCounter).toBeTruthy();
    }));

  it('should have a getStop function',
    inject([TimerService], (service: TimerService) => {
      expect(service.getStop).toBeTruthy();
    }));
});
