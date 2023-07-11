import { TestBed } from '@angular/core/testing';
import { CheckoutFeatureModule } from './checkout-feature.module';

describe('CheckoutFeatureModule', () => {
  let pipe: CheckoutFeatureModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CheckoutFeatureModule] });
    pipe = TestBed.inject(CheckoutFeatureModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
