import { OurDifferenceModule } from './our-difference.module';

describe('OurDifferenceModule', () => {
  let ourDifferenceModule: OurDifferenceModule;

  beforeEach(() => {
    ourDifferenceModule = new OurDifferenceModule();
  });

  it('should create an instance', () => {
    expect(ourDifferenceModule).toBeTruthy();
  });
});
