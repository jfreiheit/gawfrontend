import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EWDUreadComponent } from './ewduread.component';

describe('EWDUreadComponent', () => {
  let component: EWDUreadComponent;
  let fixture: ComponentFixture<EWDUreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EWDUreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EWDUreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
