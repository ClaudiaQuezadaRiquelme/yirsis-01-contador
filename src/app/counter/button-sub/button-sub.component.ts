import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-sub',
  templateUrl: './button-sub.component.html',
  styleUrls: ['./button-sub.component.css']
})
export class ButtonSubComponent {
  @Input()
  counter: number = 0;

  @Output()
  onSub: EventEmitter<number> = new EventEmitter();

  sub() {
    this.counter--;
    this.onSub.emit(this.counter);
  }
}
