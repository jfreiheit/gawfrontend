import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KFRreadComponent } from './kfrread.component';

describe('KFRreadComponent', () => {
  let component: KFRreadComponent;
  let fixture: ComponentFixture<KFRreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KFRreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KFRreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
