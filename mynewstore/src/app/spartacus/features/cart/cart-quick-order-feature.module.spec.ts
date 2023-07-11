import { TestBed } from '@angular/core/testing';
import { CartQuickOrderFeatureModule } from './cart-quick-order-feature.module';

describe('CartQuickOrderFeatureModule', () => {
  let pipe: CartQuickOrderFeatureModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartQuickOrderFeatureModule]
    });
    pipe = TestBed.inject(CartQuickOrderFeatureModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
