import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnservicsComponent } from './learnservics.component';

describe('LearnservicsComponent', () => {
  let component: LearnservicsComponent;
  let fixture: ComponentFixture<LearnservicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnservicsComponent]
    });
    fixture = TestBed.createComponent(LearnservicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
