import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HinweiszettelComponent } from './hinweiszettel.component';

describe('HinweiszettelComponent', () => {
  let component: HinweiszettelComponent;
  let fixture: ComponentFixture<HinweiszettelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HinweiszettelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HinweiszettelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
