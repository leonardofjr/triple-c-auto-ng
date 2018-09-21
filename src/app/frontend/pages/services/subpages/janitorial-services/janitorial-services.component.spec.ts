import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanitorialServicesComponent } from './janitorial-services.component';

describe('JanitorialServicesComponent', () => {
  let component: JanitorialServicesComponent;
  let fixture: ComponentFixture<JanitorialServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanitorialServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanitorialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
