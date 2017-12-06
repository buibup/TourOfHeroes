import { TestBed, inject } from '@angular/core/testing';

import { Hero.ServiceService } from './hero.service.service';

describe('Hero.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Hero.ServiceService]
    });
  });

  it('should be created', inject([Hero.ServiceService], (service: Hero.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
