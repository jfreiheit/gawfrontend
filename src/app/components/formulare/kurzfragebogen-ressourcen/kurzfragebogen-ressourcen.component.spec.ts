import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurzfragebogenRessourcenComponent } from './kurzfragebogen-ressourcen.component';

describe('KurzfragebogenRessourcenComponent', () => {
  let component: KurzfragebogenRessourcenComponent;
  let fixture: ComponentFixture<KurzfragebogenRessourcenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurzfragebogenRessourcenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurzfragebogenRessourcenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
