import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasosDeRegistroComponent } from './pasos-de-registro.component';

describe('PasosDeRegistroComponent', () => {
  let component: PasosDeRegistroComponent;
  let fixture: ComponentFixture<PasosDeRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasosDeRegistroComponent]
    });
    fixture = TestBed.createComponent(PasosDeRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
