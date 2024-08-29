import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaComerciosComponent } from './busqueda-comercios.component';

describe('BusquedaComerciosComponent', () => {
  let component: BusquedaComerciosComponent;
  let fixture: ComponentFixture<BusquedaComerciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaComerciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaComerciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
