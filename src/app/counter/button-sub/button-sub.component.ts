import { Component } from '@angular/core';

@Component({
  selector: 'app-button-sub',
  templateUrl: './button-sub.component.html',
  styleUrls: ['./button-sub.component.css']
})
export class ButtonSubComponent {
  counter: number = 0;
  sub() {
    this.counter--;
  }
}
