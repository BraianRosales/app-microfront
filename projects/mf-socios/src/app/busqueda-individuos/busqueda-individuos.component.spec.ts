import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaIndividuosComponent } from './busqueda-individuos.component';

describe('BusquedaIndividuosComponent', () => {
  let component: BusquedaIndividuosComponent;
  let fixture: ComponentFixture<BusquedaIndividuosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaIndividuosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaIndividuosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
