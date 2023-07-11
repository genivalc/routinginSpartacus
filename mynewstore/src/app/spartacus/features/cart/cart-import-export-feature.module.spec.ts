import { TestBed } from '@angular/core/testing';
import { CartImportExportFeatureModule } from './cart-import-export-feature.module';

describe('CartImportExportFeatureModule', () => {
  let pipe: CartImportExportFeatureModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartImportExportFeatureModule]
    });
    pipe = TestBed.inject(CartImportExportFeatureModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
