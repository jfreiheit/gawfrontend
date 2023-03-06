import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEreadComponent } from './meread.component';

describe('MEreadComponent', () => {
  let component: MEreadComponent;
  let fixture: ComponentFixture<MEreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MEreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MEreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
