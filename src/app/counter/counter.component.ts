import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent {
    counter: number = 23;

    handleCount(value: number): void {
        this.counter = value;
    }
}