import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheeComponent } from './coachee.component';

describe('CoacheeComponent', () => {
  let component: CoacheeComponent;
  let fixture: ComponentFixture<CoacheeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoacheeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoacheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
