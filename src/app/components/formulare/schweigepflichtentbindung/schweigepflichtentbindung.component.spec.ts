import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchweigepflichtentbindungComponent } from './schweigepflichtentbindung.component';

describe('SchweigepflichtentbindungComponent', () => {
  let component: SchweigepflichtentbindungComponent;
  let fixture: ComponentFixture<SchweigepflichtentbindungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchweigepflichtentbindungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchweigepflichtentbindungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
