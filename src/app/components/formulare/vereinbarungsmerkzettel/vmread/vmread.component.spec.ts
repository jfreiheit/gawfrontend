import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMreadComponent } from './vmread.component';

describe('VMreadComponent', () => {
  let component: VMreadComponent;
  let fixture: ComponentFixture<VMreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VMreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VMreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
