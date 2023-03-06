import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZweifaktorCoacheeComponent } from './zweifaktor-coachee.component';

describe('ZweifaktorCoacheeComponent', () => {
  let component: ZweifaktorCoacheeComponent;
  let fixture: ComponentFixture<ZweifaktorCoacheeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZweifaktorCoacheeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZweifaktorCoacheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
