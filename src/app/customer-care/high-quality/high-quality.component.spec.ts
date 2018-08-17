import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighQualityComponent } from './high-quality.component';

describe('HighQualityComponent', () => {
  let component: HighQualityComponent;
  let fixture: ComponentFixture<HighQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
