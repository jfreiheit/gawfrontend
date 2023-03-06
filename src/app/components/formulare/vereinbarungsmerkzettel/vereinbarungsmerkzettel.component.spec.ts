import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VereinbarungsmerkzettelComponent } from './vereinbarungsmerkzettel.component';

describe('VereinbarungsmerkzettelComponent', () => {
  let component: VereinbarungsmerkzettelComponent;
  let fixture: ComponentFixture<VereinbarungsmerkzettelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VereinbarungsmerkzettelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VereinbarungsmerkzettelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
