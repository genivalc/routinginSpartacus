import { TestBed } from '@angular/core/testing';
import { SmartEditFeatureModule } from './smart-edit-feature.module';

describe('SmartEditFeatureModule', () => {
  let pipe: SmartEditFeatureModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SmartEditFeatureModule] });
    pipe = TestBed.inject(SmartEditFeatureModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
