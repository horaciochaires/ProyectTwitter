import { TestBed, inject } from '@angular/core/testing';

import { TimeLineService } from './time-line.service';

describe('TimeLineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeLineService]
    });
  });

  it('should be created', inject([TimeLineService], (service: TimeLineService) => {
    expect(service).toBeTruthy();
  }));
});
