import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengersComponent } from './avengers.component';

describe('AvengersComponent', () => {
  let component: AvengersComponent;
  let fixture: ComponentFixture<AvengersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvengersComponent]
    });
    fixture = TestBed.createComponent(AvengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
