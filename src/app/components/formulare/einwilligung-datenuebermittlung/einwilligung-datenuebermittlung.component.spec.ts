import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinwilligungDatenuebermittlungComponent } from './einwilligung-datenuebermittlung.component';

describe('EinwilligungDatenuebermittlungComponent', () => {
  let component: EinwilligungDatenuebermittlungComponent;
  let fixture: ComponentFixture<EinwilligungDatenuebermittlungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinwilligungDatenuebermittlungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinwilligungDatenuebermittlungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
