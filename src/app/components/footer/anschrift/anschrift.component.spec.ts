import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnschriftComponent } from './anschrift.component';

describe('AnschriftComponent', () => {
  let component: AnschriftComponent;
  let fixture: ComponentFixture<AnschriftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnschriftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnschriftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
