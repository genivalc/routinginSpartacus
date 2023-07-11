import { TestBed } from '@angular/core/testing';
import { ProductImageZoomFeatureModule } from './product-image-zoom-feature.module';

describe('ProductImageZoomFeatureModule', () => {
  let pipe: ProductImageZoomFeatureModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductImageZoomFeatureModule]
    });
    pipe = TestBed.inject(ProductImageZoomFeatureModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
