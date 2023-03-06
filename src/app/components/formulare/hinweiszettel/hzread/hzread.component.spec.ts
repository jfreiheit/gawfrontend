import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HZreadComponent } from './hzread.component';

describe('HZreadComponent', () => {
  let component: HZreadComponent;
  let fixture: ComponentFixture<HZreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HZreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HZreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
