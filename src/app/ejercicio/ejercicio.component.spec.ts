import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioComponent } from './ejercicio.component';

describe('EjercicioComponent', () => {
  let component: EjercicioComponent;
  let fixture: ComponentFixture<EjercicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjercicioComponent]
    });
    fixture = TestBed.createComponent(EjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
