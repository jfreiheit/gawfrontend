import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallarbeitComponent } from './fallarbeit.component';

describe('FallarbeitComponent', () => {
  let component: FallarbeitComponent;
  let fixture: ComponentFixture<FallarbeitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallarbeitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FallarbeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
