import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinwilligungDatenerhebungComponent } from './einwilligung-datenerhebung.component';

describe('EinwilligungDatenerhebungComponent', () => {
  let component: EinwilligungDatenerhebungComponent;
  let fixture: ComponentFixture<EinwilligungDatenerhebungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinwilligungDatenerhebungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinwilligungDatenerhebungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
