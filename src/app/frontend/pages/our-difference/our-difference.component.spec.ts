import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDifferenceComponent } from './our-difference.component';

describe('OurDifferenceComponent', () => {
  let component: OurDifferenceComponent;
  let fixture: ComponentFixture<OurDifferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurDifferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
