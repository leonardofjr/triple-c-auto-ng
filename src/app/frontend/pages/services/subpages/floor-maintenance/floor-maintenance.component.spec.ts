import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorMaintenanceComponent } from './floor-maintenance.component';

describe('FloorMaintenanceComponent', () => {
  let component: FloorMaintenanceComponent;
  let fixture: ComponentFixture<FloorMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
