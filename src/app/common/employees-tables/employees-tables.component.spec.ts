import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesTablesComponent } from './employees-tables.component';

describe('EmployeesTablesComponent', () => {
  let component: EmployeesTablesComponent;
  let fixture: ComponentFixture<EmployeesTablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesTablesComponent]
    });
    fixture = TestBed.createComponent(EmployeesTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
