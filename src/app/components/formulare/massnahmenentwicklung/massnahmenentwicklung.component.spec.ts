import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassnahmenentwicklungComponent } from './massnahmenentwicklung.component';

describe('MassnahmenentwicklungComponent', () => {
  let component: MassnahmenentwicklungComponent;
  let fixture: ComponentFixture<MassnahmenentwicklungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassnahmenentwicklungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MassnahmenentwicklungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
