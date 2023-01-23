import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadoComponent } from './validado.component';

describe('ValidadoComponent', () => {
  let component: ValidadoComponent;
  let fixture: ComponentFixture<ValidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
