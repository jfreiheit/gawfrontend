import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertraulichkeitsverpflichtungComponent } from './vertraulichkeitsverpflichtung.component';

describe('VertraulichkeitsverpflichtungComponent', () => {
  let component: VertraulichkeitsverpflichtungComponent;
  let fixture: ComponentFixture<VertraulichkeitsverpflichtungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertraulichkeitsverpflichtungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VertraulichkeitsverpflichtungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
