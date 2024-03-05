import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent {
  @Output () clickB: EventEmitter<string> = new EventEmitter();
  clickButton(mensaje){
    this.clickB.emit(mensaje);
  }
}
