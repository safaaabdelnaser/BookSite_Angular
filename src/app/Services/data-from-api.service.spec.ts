import { TestBed } from '@angular/core/testing';

import { DataFromAPIService } from './data-from-api.service';

describe('DataFromAPIService', () => {
  let service: DataFromAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFromAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
