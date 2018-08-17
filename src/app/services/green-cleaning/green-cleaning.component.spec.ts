import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCleaningComponent } from './green-cleaning.component';

describe('GreenCleaningComponent', () => {
  let component: GreenCleaningComponent;
  let fixture: ComponentFixture<GreenCleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenCleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
