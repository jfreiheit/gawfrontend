import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallAnlegenComponent } from './fall-anlegen.component';

describe('FallAnlegenComponent', () => {
  let component: FallAnlegenComponent;
  let fixture: ComponentFixture<FallAnlegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallAnlegenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FallAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
