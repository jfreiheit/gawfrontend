import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VereinbarungComponent } from './vereinbarung.component';

describe('VereinbarungComponent', () => {
  let component: VereinbarungComponent;
  let fixture: ComponentFixture<VereinbarungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VereinbarungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VereinbarungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
