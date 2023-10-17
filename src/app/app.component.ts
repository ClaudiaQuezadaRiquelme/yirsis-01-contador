import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Contador';
  counter: number = 0;

  add() {
    this.counter++;
  }
  sub() {
    this.counter--;
  }
}
