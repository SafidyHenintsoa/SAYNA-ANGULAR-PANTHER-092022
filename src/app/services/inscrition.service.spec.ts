import { TestBed } from '@angular/core/testing';

import { InscritionService } from './inscrition.service';

describe('InscritionService', () => {
  let service: InscritionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscritionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
