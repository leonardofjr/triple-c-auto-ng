import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedFreeQuoteFormComponent } from './fixed-free-quote-form.component';

describe('FixedFreeQuoteFormComponent', () => {
  let component: FixedFreeQuoteFormComponent;
  let fixture: ComponentFixture<FixedFreeQuoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedFreeQuoteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedFreeQuoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
