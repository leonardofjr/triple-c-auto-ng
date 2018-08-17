import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsIntroductionComponent } from './about-us-introduction.component';

describe('AboutUsIntroductionComponent', () => {
  let component: AboutUsIntroductionComponent;
  let fixture: ComponentFixture<AboutUsIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
