import { CounterComponent } from "./counter.component"
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ButtonAddComponent } from "./button-add/button-add.component";
import { ButtonSubComponent } from "./button-sub/button-sub.component";

describe('CounterComponent Unit Testing', ()=> {
    let component: CounterComponent;
    let fixture: ComponentFixture<CounterComponent>;

    // Renderizar componente
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                CounterComponent
        ],
          schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Se debe crear CounterComponent', ()=> {      
        expect(component).toBeTruthy();
    });

    it('Debe crear el texto "Contador: 23"', ()=> {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Contador: 23');
    });

    // Prueba lógica
    it('Valor inicial del counter es 23', ()=> {
        const counter = new CounterComponent();
        expect(counter.counter).toBe(23);
    });
});

describe('CounterComponent Integration Testing', ()=> {
    let component: CounterComponent;
    let fixture: ComponentFixture<CounterComponent>;

    // Renderizar componente
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                CounterComponent,
                ButtonAddComponent,
                ButtonSubComponent
        ],
          schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Evento Click BtnAdd', ()=> {
        const compiled = fixture.nativeElement as HTMLElement;
        const counterValue = compiled.querySelector("h1");
        const btnAdd: HTMLElement = fixture.debugElement.nativeElement.querySelector('#addBtn');
        btnAdd.click();
        fixture.detectChanges();
        expect(counterValue?.textContent).toContain('Contador: 24');
    });

    it('Evento Click BtnSub', ()=> {
        const compiled = fixture.nativeElement as HTMLElement;
        const counterValue = compiled.querySelector("h1");
        const btnSub: HTMLElement = fixture.debugElement.nativeElement.querySelector('#subBtn');
        btnSub.click();
        fixture.detectChanges();
        expect(counterValue?.textContent).toContain('Contador: 22');
    });
});