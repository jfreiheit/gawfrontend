import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoachdatenComponent } from './update-coachdaten.component';

describe('UpdateCoachdatenComponent', () => {
  let component: UpdateCoachdatenComponent;
  let fixture: ComponentFixture<UpdateCoachdatenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCoachdatenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCoachdatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
