import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vereinbarungsmerkzettel2Component } from './vereinbarungsmerkzettel2.component';

describe('Vereinbarungsmerkzettel2Component', () => {
  let component: Vereinbarungsmerkzettel2Component;
  let fixture: ComponentFixture<Vereinbarungsmerkzettel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vereinbarungsmerkzettel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vereinbarungsmerkzettel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
