import { TestBed } from '@angular/core/testing';
import { CartSavedCartFeatureModule } from './cart-saved-cart-feature.module';

describe('CartSavedCartFeatureModule', () => {
  let pipe: CartSavedCartFeatureModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CartSavedCartFeatureModule] });
    pipe = TestBed.inject(CartSavedCartFeatureModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
