import { TestBed } from '@angular/core/testing';
import { OrderFeatureModule } from './order-feature.module';

describe('OrderFeatureModule', () => {
  let pipe: OrderFeatureModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [OrderFeatureModule] });
    pipe = TestBed.inject(OrderFeatureModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
