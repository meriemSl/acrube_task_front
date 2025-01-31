import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchComponentComponent } from './launch-component.component';

describe('LaunchComponentComponent', () => {
  let component: LaunchComponentComponent;
  let fixture: ComponentFixture<LaunchComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchComponentComponent]
    });
    fixture = TestBed.createComponent(LaunchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
