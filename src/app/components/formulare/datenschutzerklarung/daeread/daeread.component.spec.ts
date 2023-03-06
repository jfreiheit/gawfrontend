import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAEreadComponent } from './daeread.component';

describe('DAEreadComponent', () => {
  let component: DAEreadComponent;
  let fixture: ComponentFixture<DAEreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAEreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DAEreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
