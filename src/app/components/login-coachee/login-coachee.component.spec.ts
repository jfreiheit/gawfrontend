import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCoacheeComponent } from './login-coachee.component';

describe('LoginCoacheeComponent', () => {
  let component: LoginCoacheeComponent;
  let fixture: ComponentFixture<LoginCoacheeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCoacheeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCoacheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
