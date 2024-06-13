import { TestBed } from '@angular/core/testing';

import { DataRsjsService } from './data-rsjs.service';

describe('DataRsjsService', () => {
  let service: DataRsjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataRsjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
