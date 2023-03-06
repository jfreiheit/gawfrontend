import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTermineComponent } from './update-termine.component';

describe('UpdateTermineComponent', () => {
  let component: UpdateTermineComponent;
  let fixture: ComponentFixture<UpdateTermineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTermineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTermineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
