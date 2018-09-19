import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorRejuvenationDiscountComponent } from './floor-rejuvenation-discount.component';

describe('FloorRejuvenationDiscountComponent', () => {
  let component: FloorRejuvenationDiscountComponent;
  let fixture: ComponentFixture<FloorRejuvenationDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorRejuvenationDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorRejuvenationDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
