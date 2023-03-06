import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UebersichtUsersComponent } from './uebersicht-users.component';

describe('UebersichtUsersComponent', () => {
  let component: UebersichtUsersComponent;
  let fixture: ComponentFixture<UebersichtUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UebersichtUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UebersichtUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
