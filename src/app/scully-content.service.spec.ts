import { TestBed } from '@angular/core/testing';

import { ScullyContentService } from './scully-content.service';

describe('ScullyContentService', () => {
  let service: ScullyContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScullyContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
