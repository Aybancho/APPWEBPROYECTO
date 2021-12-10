import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiacionesComponent } from './modifiaciones.component';

describe('ModifiacionesComponent', () => {
  let component: ModifiacionesComponent;
  let fixture: ComponentFixture<ModifiacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
