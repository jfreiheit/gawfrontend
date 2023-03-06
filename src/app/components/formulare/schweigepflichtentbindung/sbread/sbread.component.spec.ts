import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBreadComponent } from './sbread.component';

describe('SBreadComponent', () => {
  let component: SBreadComponent;
  let fixture: ComponentFixture<SBreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SBreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SBreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
