import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StkreadComponent } from './stkread.component';

describe('StkreadComponent', () => {
  let component: StkreadComponent;
  let fixture: ComponentFixture<StkreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StkreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StkreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
