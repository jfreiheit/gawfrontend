import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurzfragebogenBelastungenComponent } from './kurzfragebogen-belastungen.component';

describe('KurzfragebogenBelastungenComponent', () => {
  let component: KurzfragebogenBelastungenComponent;
  let fixture: ComponentFixture<KurzfragebogenBelastungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurzfragebogenBelastungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurzfragebogenBelastungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
