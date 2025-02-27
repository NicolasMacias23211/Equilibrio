import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasTablesComponent } from './citas-tables.component';

describe('CitasTablesComponent', () => {
  let component: CitasTablesComponent;
  let fixture: ComponentFixture<CitasTablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasTablesComponent]
    });
    fixture = TestBed.createComponent(CitasTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
