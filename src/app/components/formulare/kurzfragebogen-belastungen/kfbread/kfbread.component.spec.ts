import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KFBreadComponent } from './kfbread.component';

describe('KFBreadComponent', () => {
  let component: KFBreadComponent;
  let fixture: ComponentFixture<KFBreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KFBreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KFBreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
