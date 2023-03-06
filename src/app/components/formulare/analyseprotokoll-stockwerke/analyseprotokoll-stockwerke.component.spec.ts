import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseprotokollStockwerkeComponent } from './analyseprotokoll-stockwerke.component';

describe('AnalyseprotokollStockwerkeComponent', () => {
  let component: AnalyseprotokollStockwerkeComponent;
  let fixture: ComponentFixture<AnalyseprotokollStockwerkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseprotokollStockwerkeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseprotokollStockwerkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
