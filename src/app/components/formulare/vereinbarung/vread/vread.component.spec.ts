import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VreadComponent } from './vread.component';

describe('VreadComponent', () => {
  let component: VreadComponent;
  let fixture: ComponentFixture<VreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
