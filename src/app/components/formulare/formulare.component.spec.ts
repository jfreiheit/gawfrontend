import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulareComponent } from './formulare.component';

describe('FormulareComponent', () => {
  let component: FormulareComponent;
  let fixture: ComponentFixture<FormulareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
