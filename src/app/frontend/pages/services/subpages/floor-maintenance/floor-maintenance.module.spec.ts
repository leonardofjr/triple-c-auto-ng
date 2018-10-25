import { FloorMaintenanceModule } from './floor-maintenance.module';

describe('FloorMaintenanceModule', () => {
  let floorMaintenanceModule: FloorMaintenanceModule;

  beforeEach(() => {
    floorMaintenanceModule = new FloorMaintenanceModule();
  });

  it('should create an instance', () => {
    expect(floorMaintenanceModule).toBeTruthy();
  });
});
