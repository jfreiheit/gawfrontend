import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZweifaktorComponent } from './zweifaktor.component';

describe('ZweifaktorComponent', () => {
  let component: ZweifaktorComponent;
  let fixture: ComponentFixture<ZweifaktorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZweifaktorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZweifaktorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
