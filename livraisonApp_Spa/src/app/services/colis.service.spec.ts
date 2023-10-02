/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ColisService } from './command.service';

describe('Service: Colis', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColisService]
    });
  });

  it('should ...', inject([ColisService], (service: ColisService) => {
    expect(service).toBeTruthy();
  }));
});
