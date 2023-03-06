import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAE2readComponent } from './dae2read.component';

describe('DAE2readComponent', () => {
  let component: DAE2readComponent;
  let fixture: ComponentFixture<DAE2readComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAE2readComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DAE2readComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
