import { GreenCleaningServicesModule } from './green-cleaning-services.module';

describe('GreenCleaningServicesModule', () => {
  let greenCleaningServicesModule: GreenCleaningServicesModule;

  beforeEach(() => {
    greenCleaningServicesModule = new GreenCleaningServicesModule();
  });

  it('should create an instance', () => {
    expect(greenCleaningServicesModule).toBeTruthy();
  });
});
