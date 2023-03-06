import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseprotokollComponent } from './analyseprotokoll.component';

describe('AnalyseprotokollComponent', () => {
  let component: AnalyseprotokollComponent;
  let fixture: ComponentFixture<AnalyseprotokollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseprotokollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseprotokollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
