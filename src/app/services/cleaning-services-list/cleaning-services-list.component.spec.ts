import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningServicesListComponent } from './cleaning-services-list.component';

describe('CleaningServicesListComponent', () => {
  let component: CleaningServicesListComponent;
  let fixture: ComponentFixture<CleaningServicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningServicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
