import { TestBed } from '@angular/core/testing';
import { StoreFinderFeatureModule } from './store-finder-feature.module';

describe('StoreFinderFeatureModule', () => {
  let pipe: StoreFinderFeatureModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [StoreFinderFeatureModule] });
    pipe = TestBed.inject(StoreFinderFeatureModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
