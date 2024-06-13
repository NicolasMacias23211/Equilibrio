import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCardsComponent } from './services-cards.component';

describe('ServicesCardsComponent', () => {
  let component: ServicesCardsComponent;
  let fixture: ComponentFixture<ServicesCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesCardsComponent]
    });
    fixture = TestBed.createComponent(ServicesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
