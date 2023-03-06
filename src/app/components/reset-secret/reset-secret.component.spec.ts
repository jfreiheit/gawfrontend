import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetSecretComponent } from './reset-secret.component';

describe('ResetSecretyComponent', () => {
  let component: ResetSecretComponent;
  let fixture: ComponentFixture<ResetSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetSecretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
