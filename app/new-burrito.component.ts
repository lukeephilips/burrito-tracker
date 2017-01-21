import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Burrito } from './burrito.model';
import { NewTypeComponent } from './new-type.component';




@Component({
  selector: 'new-burrito',
  templateUrl: './app/new-burrito.component.html'
})

export class NewBurritoComponent {
  @Input() types: string[];
  @Output() newBurritoSender = new EventEmitter();
  @Output() anotherTypeSender = new EventEmitter();

  showNewBurrito: boolean = false;

  showForm(){
    this.showNewBurrito = true;
  }

  newBurrito(type: string, restaurant: string, isSuper: boolean, calories: number, date: string) {

    let newBurrito: Burrito = new Burrito(type, restaurant, isSuper, calories, date)
    this.newBurritoSender.emit(newBurrito);
    this.showNewBurrito = false
  }
  keepSendingType(type) {
    console.log(type);
    this.anotherTypeSender.emit(type);

  }
}
