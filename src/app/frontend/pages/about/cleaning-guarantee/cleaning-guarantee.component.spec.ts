import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningGuaranteeComponent } from './cleaning-guarantee.component';

describe('CleaningGuaranteeComponent', () => {
  let component: CleaningGuaranteeComponent;
  let fixture: ComponentFixture<CleaningGuaranteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningGuaranteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningGuaranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
