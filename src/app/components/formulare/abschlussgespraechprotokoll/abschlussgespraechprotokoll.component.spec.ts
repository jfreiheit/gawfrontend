import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbschlussgespraechprotokollComponent } from './abschlussgespraechprotokoll.component';

describe('AbschlussgespraechprotokollComponent', () => {
  let component: AbschlussgespraechprotokollComponent;
  let fixture: ComponentFixture<AbschlussgespraechprotokollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbschlussgespraechprotokollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbschlussgespraechprotokollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
