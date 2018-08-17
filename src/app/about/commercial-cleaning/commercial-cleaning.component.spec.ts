import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialCleaningComponent } from './commercial-cleaning.component';

describe('CommercialCleaningComponent', () => {
  let component: CommercialCleaningComponent;
  let fixture: ComponentFixture<CommercialCleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialCleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
