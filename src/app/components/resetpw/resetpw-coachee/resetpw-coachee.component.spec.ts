import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpwCoacheeComponent } from './resetpw-coachee.component';

describe('ResetpwCoacheeComponent', () => {
  let component: ResetpwCoacheeComponent;
  let fixture: ComponentFixture<ResetpwCoacheeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpwCoacheeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpwCoacheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
