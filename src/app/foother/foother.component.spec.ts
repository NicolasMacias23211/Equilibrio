import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootherComponent } from './foother.component';

describe('FootherComponent', () => {
  let component: FootherComponent;
  let fixture: ComponentFixture<FootherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootherComponent]
    });
    fixture = TestBed.createComponent(FootherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
