import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageCoacheeComponent } from './landingpage-coachee.component';

describe('LandingpageCoacheeComponent', () => {
  let component: LandingpageCoacheeComponent;
  let fixture: ComponentFixture<LandingpageCoacheeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingpageCoacheeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpageCoacheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
