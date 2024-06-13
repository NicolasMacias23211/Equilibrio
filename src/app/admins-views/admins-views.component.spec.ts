import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsViewsComponent } from './admins-views.component';

describe('AdminsViewsComponent', () => {
  let component: AdminsViewsComponent;
  let fixture: ComponentFixture<AdminsViewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminsViewsComponent]
    });
    fixture = TestBed.createComponent(AdminsViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
