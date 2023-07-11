import { TestBed } from '@angular/core/testing';
import { AsmFeatureModule } from './asm-feature.module';

describe('AsmFeatureModule', () => {
  let pipe: AsmFeatureModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AsmFeatureModule] });
    pipe = TestBed.inject(AsmFeatureModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
