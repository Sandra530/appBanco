import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTransferenciaComponent } from './detalle-transferencia.component';

describe('DetalleTransferenciaComponent', () => {
  let component: DetalleTransferenciaComponent;
  let fixture: ComponentFixture<DetalleTransferenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleTransferenciaComponent]
    });
    fixture = TestBed.createComponent(DetalleTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
