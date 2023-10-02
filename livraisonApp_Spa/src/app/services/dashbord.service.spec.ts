/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DashbordService } from './dashbord.service';

describe('Service: Dashbord', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashbordService]
    });
  });

  it('should ...', inject([DashbordService], (service: DashbordService) => {
    expect(service).toBeTruthy();
  }));
});
