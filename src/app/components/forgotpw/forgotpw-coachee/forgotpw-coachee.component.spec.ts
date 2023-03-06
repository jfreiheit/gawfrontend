import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpwCoacheeComponent } from './forgotpw-coachee.component';

describe('ForgotpwCoacheeComponent', () => {
  let component: ForgotpwCoacheeComponent;
  let fixture: ComponentFixture<ForgotpwCoacheeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotpwCoacheeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpwCoacheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
