import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSubComponent } from './button-sub.component';

describe('ButtonSubComponent', () => {
  let component: ButtonSubComponent;
  let fixture: ComponentFixture<ButtonSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSubComponent]
    });
    fixture = TestBed.createComponent(ButtonSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe inicializar el contador en cero. (Al inicializarse de forma independiente del counter)', () => { 
    expect(component.counter).toBe(0);
  });

  it('Al ejecutar sub(), el valor del contador es -1.', () => { 
    let newCounter = 0;
    component.onSub.subscribe( contador => { // me suscribo al evento
      newCounter = contador;
    });
    component.sub();
    expect(newCounter).toBe(-1);
  });
});
