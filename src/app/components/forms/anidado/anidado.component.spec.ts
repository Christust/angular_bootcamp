import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnidadoComponent } from './anidado.component';

describe('AnidadoComponent', () => {
  let component: AnidadoComponent;
  let fixture: ComponentFixture<AnidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnidadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
