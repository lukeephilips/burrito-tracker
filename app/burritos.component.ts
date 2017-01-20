import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Burrito } from './burrito.model';



@Component({
  selector: 'burritos',
  templateUrl: './app/burritos.component.html'
})

export class BurritosComponent {
  @Input() childBurritosList: Burrito[];
  @Output() selectBurritoSender = new EventEmitter();

  selectBurrito(burrito){
    this.selectBurritoSender.emit(burrito);
    console.log("clicked")
  }

}
