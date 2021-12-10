import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegadorComponent } from './barra-navegador.component';

describe('BarraNavegadorComponent', () => {
  let component: BarraNavegadorComponent;
  let fixture: ComponentFixture<BarraNavegadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavegadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
