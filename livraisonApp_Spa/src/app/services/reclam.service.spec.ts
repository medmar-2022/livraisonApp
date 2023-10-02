/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReclamService } from './reclam.service';

describe('Service: Reclam', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReclamService]
    });
  });

  it('should ...', inject([ReclamService], (service: ReclamService) => {
    expect(service).toBeTruthy();
  }));
});
