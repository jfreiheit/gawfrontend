import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassnahmenworkshopComponent } from './massnahmenworkshop.component';

describe('MassnahmenworkshopComponent', () => {
  let component: MassnahmenworkshopComponent;
  let fixture: ComponentFixture<MassnahmenworkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassnahmenworkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MassnahmenworkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
