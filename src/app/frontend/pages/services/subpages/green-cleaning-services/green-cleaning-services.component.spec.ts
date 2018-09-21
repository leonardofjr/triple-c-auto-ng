import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCleaningServicesComponent } from './green-cleaning-services.component';

describe('GreenCleaningServicesComponent', () => {
  let component: GreenCleaningServicesComponent;
  let fixture: ComponentFixture<GreenCleaningServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenCleaningServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenCleaningServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
