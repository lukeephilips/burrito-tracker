import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Burrito } from './burrito.model';



@Component({
  selector: 'new-burrito',
  templateUrl: './app/new-burrito.component.html'
})

export class NewBurritoComponent {
  @Input() childTypes: string[];

  test: string = "test";

  @Output() newBurritoSender = new EventEmitter();

  newBurrito(type: string, restaurant: string, isSuper: boolean, calories: number, date: Date) {
    alert("shit works")
    let newBurrito: Burrito = new Burrito(type, restaurant, isSuper, calories, date)
    this.newBurritoSender.emit(newBurrito);
  }
}
