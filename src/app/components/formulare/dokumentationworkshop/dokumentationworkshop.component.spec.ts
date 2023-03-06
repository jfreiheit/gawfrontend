import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumentationworkshopComponent } from './dokumentationworkshop.component';

describe('DokumentationworkshopComponent', () => {
  let component: DokumentationworkshopComponent;
  let fixture: ComponentFixture<DokumentationworkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DokumentationworkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DokumentationworkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
