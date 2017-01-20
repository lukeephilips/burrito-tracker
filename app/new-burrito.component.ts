import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Burrito } from './burrito.model';



@Component({
  selector: 'new-burrito',
  templateUrl: './app/new-burrito.component.html'
})

export class NewBurritoComponent {
  @Input() types: string[];
  @Output() newBurritoSender = new EventEmitter();
  showNewBurrito: boolean = false;

  showForm(){
    this.showNewBurrito = true;
  }

  newBurrito(type: string, restaurant: string, isSuper: boolean, calories: number, date: string) {
    
    let newBurrito: Burrito = new Burrito(type, restaurant, isSuper, calories, date)
    this.newBurritoSender.emit(newBurrito);
    this.showNewBurrito = false
  }
}
