import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoacheedatenComponent } from './update-coacheedaten.component';

describe('UpdateCoacheedatenComponent', () => {
  let component: UpdateCoacheedatenComponent;
  let fixture: ComponentFixture<UpdateCoacheedatenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCoacheedatenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCoacheedatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
