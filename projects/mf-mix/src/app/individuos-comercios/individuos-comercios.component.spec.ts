import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuosComerciosComponent } from './individuos-comercios.component';

describe('IndividuosComerciosComponent', () => {
  let component: IndividuosComerciosComponent;
  let fixture: ComponentFixture<IndividuosComerciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividuosComerciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividuosComerciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
