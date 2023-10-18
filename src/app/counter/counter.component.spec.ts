import { CounterComponent } from "./counter.component"
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CounterComponent', ()=> {
    let component: CounterComponent;
    let fixture: ComponentFixture<CounterComponent>;

    // Renderizar componente
    beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [CounterComponent],
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
})