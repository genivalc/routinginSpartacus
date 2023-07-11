import { TestBed } from '@angular/core/testing';
import { PersonalizationFeatureModule } from './personalization-feature.module';

describe('PersonalizationFeatureModule', () => {
  let pipe: PersonalizationFeatureModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalizationFeatureModule]
    });
    pipe = TestBed.inject(PersonalizationFeatureModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
