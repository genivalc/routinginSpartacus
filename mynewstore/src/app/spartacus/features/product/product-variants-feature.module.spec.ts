import { TestBed } from '@angular/core/testing';
import { ProductVariantsFeatureModule } from './product-variants-feature.module';

describe('ProductVariantsFeatureModule', () => {
  let pipe: ProductVariantsFeatureModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductVariantsFeatureModule]
    });
    pipe = TestBed.inject(ProductVariantsFeatureModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
