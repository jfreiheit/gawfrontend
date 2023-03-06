import { TestBed } from '@angular/core/testing';

import { Fragen2Service } from './fragen2.service';

describe('Fragen2Service', () => {
  let service: Fragen2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fragen2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
