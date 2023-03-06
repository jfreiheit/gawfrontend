import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VM2readComponent } from './vm2read.component';

describe('VM2readComponent', () => {
  let component: VM2readComponent;
  let fixture: ComponentFixture<VM2readComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VM2readComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VM2readComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
