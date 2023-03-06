import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeineVorgaengeComponent } from './meine-vorgaenge.component';

describe('MeineVorgaengeComponent', () => {
  let component: MeineVorgaengeComponent;
  let fixture: ComponentFixture<MeineVorgaengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeineVorgaengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeineVorgaengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
