import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASGPreadComponent } from './asgpread.component';

describe('ASGPreadComponent', () => {
  let component: ASGPreadComponent;
  let fixture: ComponentFixture<ASGPreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASGPreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASGPreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
