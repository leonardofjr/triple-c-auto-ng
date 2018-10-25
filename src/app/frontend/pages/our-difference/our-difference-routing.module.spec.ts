import { OurDifferenceRoutingModule } from './our-difference-routing.module';

describe('OurDifferenceRoutingModule', () => {
  let ourDifferenceRoutingModule: OurDifferenceRoutingModule;

  beforeEach(() => {
    ourDifferenceRoutingModule = new OurDifferenceRoutingModule();
  });

  it('should create an instance', () => {
    expect(ourDifferenceRoutingModule).toBeTruthy();
  });
});
