import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MWreadComponent } from './mwread.component';

describe('MWreadComponent', () => {
  let component: MWreadComponent;
  let fixture: ComponentFixture<MWreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MWreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MWreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
