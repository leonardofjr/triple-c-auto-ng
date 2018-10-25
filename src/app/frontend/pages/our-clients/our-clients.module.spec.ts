import { OurClientsModule } from './our-clients.module';

describe('OurClientsModule', () => {
  let ourClientsModule: OurClientsModule;

  beforeEach(() => {
    ourClientsModule = new OurClientsModule();
  });

  it('should create an instance', () => {
    expect(ourClientsModule).toBeTruthy();
  });
});
