import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddComponent } from './button-add.component';

describe('ButtonAddComponent', () => {
  let component: ButtonAddComponent;
  let fixture: ComponentFixture<ButtonAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonAddComponent]
    });
    fixture = TestBed.createComponent(ButtonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe inicializar el contador en cero. (Al inicializarse de forma independiente del counter)', () => { 
    expect(component.counter).toBe(0);
  });

  it('Al ejecutar add(), el valor del contador es 1.', () => { 
    let newCounter = 0;
    component.onAdd.subscribe( contador => { // me suscribo al evento
      newCounter = contador;
    });
    component.add();
    expect(newCounter).toBe(1);
  });
});
