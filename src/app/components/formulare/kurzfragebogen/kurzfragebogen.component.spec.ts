import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurzfragebogenComponent } from './kurzfragebogen.component';

describe('KurzfragebogenComponent', () => {
  let component: KurzfragebogenComponent;
  let fixture: ComponentFixture<KurzfragebogenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurzfragebogenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurzfragebogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
