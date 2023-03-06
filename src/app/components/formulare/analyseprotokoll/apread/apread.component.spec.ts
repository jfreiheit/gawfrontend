import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APreadComponent } from './apread.component';

describe('APreadComponent', () => {
  let component: APreadComponent;
  let fixture: ComponentFixture<APreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
