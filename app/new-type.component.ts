import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Burrito } from './burrito.model';



@Component({
  selector: 'new-type',
  templateUrl: './app/new-type.component.html'
})

export class NewTypeComponent {
  @Output() newTypeSender = new EventEmitter();
  showNewType: boolean = false;

  showTypeForm(){
    this.showNewType = true;
  }

  addNewType(type: string) {
    console.log(type);
    this.newTypeSender.emit(type);
    this.showNewType = false;
  }
}
