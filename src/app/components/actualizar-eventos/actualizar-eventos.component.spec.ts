import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEventosComponent } from './actualizar-eventos.component';

describe('ActualizarEventosComponent', () => {
  let component: ActualizarEventosComponent;
  let fixture: ComponentFixture<ActualizarEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
