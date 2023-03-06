import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VVreadComponent } from './vvread.component';

describe('VVreadComponent', () => {
  let component: VVreadComponent;
  let fixture: ComponentFixture<VVreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VVreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VVreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
