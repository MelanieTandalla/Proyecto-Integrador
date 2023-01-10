import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDatesComponent } from './register-dates.component';

describe('RegisterDatesComponent', () => {
  let component: RegisterDatesComponent;
  let fixture: ComponentFixture<RegisterDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
