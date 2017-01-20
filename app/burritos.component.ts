import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Burrito } from './burrito.model';



@Component({
  selector: 'burritos',
  templateUrl: './app/burritos.component.html'
})

export class BurritosComponent {
  @Input() childBurritosList: Burrito[];
  @Input() types: string[];
  @Output() selectBurritoSender = new EventEmitter();
  filterByType: string = "all";

  onChange(optionFromMenu) {
  this.filterByType = optionFromMenu;
}

  selectBurrito(burrito){
    this.selectBurritoSender.emit(burrito);
    console.log("clicked")
  }

}
