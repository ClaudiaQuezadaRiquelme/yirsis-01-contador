import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent {
  @Input()
  counter: number = 0;

  @Output()
  onAdd: EventEmitter<number> = new EventEmitter();

  add() {
    this.counter++;
    this.onAdd.emit(this.counter);
  }
}
