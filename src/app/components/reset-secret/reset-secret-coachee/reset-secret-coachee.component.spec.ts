import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetSecretCoacheeComponent } from './reset-secret-coachee.component';

describe('ResetSecretCoacheeComponent', () => {
  let component: ResetSecretCoacheeComponent;
  let fixture: ComponentFixture<ResetSecretCoacheeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetSecretCoacheeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetSecretCoacheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
