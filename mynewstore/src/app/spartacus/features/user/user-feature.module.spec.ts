import { TestBed } from '@angular/core/testing';
import { UserFeatureModule } from './user-feature.module';

describe('UserFeatureModule', () => {
  let pipe: UserFeatureModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UserFeatureModule] });
    pipe = TestBed.inject(UserFeatureModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
