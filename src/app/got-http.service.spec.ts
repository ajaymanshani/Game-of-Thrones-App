import { TestBed, inject } from '@angular/core/testing';

import { GOTHTTPService } from './got-http.service';

describe('GOTHTTPService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GOTHTTPService]
    });
  });

  it('should be created', inject([GOTHTTPService], (service: GOTHTTPService) => {
    expect(service).toBeTruthy();
  }));
});
