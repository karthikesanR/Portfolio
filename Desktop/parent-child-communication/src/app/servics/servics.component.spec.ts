import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicsComponent } from './servics.component';

describe('ServicsComponent', () => {
  let component: ServicsComponent;
  let fixture: ComponentFixture<ServicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicsComponent]
    });
    fixture = TestBed.createComponent(ServicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
