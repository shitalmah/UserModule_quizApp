import { TestBed } from '@angular/core/testing';

import { HeroCommunicateService } from './hero-communicate.service';

describe('HeroCommunicateService', () => {
  let service: HeroCommunicateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroCommunicateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
