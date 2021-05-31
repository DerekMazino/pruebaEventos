import { TestBed } from '@angular/core/testing';

import { PartakerServiceService } from './partaker-service.service';

describe('PartakerServiceService', () => {
  let service: PartakerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartakerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
