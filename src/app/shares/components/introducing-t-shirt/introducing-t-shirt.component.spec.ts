import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducingTShirtComponent } from './introducing-t-shirt.component';

describe('IntroducingTShirtComponent', () => {
  let component: IntroducingTShirtComponent;
  let fixture: ComponentFixture<IntroducingTShirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroducingTShirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducingTShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
