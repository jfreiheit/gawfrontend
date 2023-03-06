import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DWreadComponent } from './dwread.component';

describe('DWreadComponent', () => {
  let component: DWreadComponent;
  let fixture: ComponentFixture<DWreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DWreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DWreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
