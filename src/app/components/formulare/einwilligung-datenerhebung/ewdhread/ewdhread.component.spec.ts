import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EWDHreadComponent } from './ewdhread.component';

describe('EWDHreadComponent', () => {
  let component: EWDHreadComponent;
  let fixture: ComponentFixture<EWDHreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EWDHreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EWDHreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
