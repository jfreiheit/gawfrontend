import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotSecretComponent } from './forgot-secret.component';

describe('ForgotSecretComponent', () => {
  let component: ForgotSecretComponent;
  let fixture: ComponentFixture<ForgotSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotSecretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
