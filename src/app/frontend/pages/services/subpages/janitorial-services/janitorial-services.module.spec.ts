import { JanitorialServicesModule } from './janitorial-services.module';

describe('JanitorialServicesModule', () => {
  let janitorialServicesModule: JanitorialServicesModule;

  beforeEach(() => {
    janitorialServicesModule = new JanitorialServicesModule();
  });

  it('should create an instance', () => {
    expect(janitorialServicesModule).toBeTruthy();
  });
});
