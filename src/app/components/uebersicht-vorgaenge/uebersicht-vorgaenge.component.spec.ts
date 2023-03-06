import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UebersichtVorgaengeComponent } from './uebersicht-vorgaenge.component';

describe('UebersichtVorgaengeComponent', () => {
  let component: UebersichtVorgaengeComponent;
  let fixture: ComponentFixture<UebersichtVorgaengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UebersichtVorgaengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UebersichtVorgaengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
