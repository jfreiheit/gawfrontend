import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datenschutz2Component } from './datenschutz2.component';

describe('Datenschutz2Component', () => {
  let component: Datenschutz2Component;
  let fixture: ComponentFixture<Datenschutz2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Datenschutz2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Datenschutz2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
