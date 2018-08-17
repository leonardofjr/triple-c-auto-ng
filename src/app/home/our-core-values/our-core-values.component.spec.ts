import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCoreValuesComponent } from './our-core-values.component';

describe('OurCoreValuesComponent', () => {
  let component: OurCoreValuesComponent;
  let fixture: ComponentFixture<OurCoreValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurCoreValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCoreValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
