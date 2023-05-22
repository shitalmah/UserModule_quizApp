import { TestBed } from '@angular/core/testing';

import { QuizAttemptServiceService } from './quiz-attempt-service.service';

describe('QuizAttemptServiceService', () => {
  let service: QuizAttemptServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizAttemptServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
