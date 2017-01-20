import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Burrito } from './burrito.model';



@Component({
  selector: 'edit-burrito',
  templateUrl: './app/edit-burrito.component.html'
})

export class EditBurritoComponent {
  @Input() selectedBurrito: Burrito;
  @Input() childTypes: string[];


  editComplete(){
    this.selectedBurrito = null;
  }
}
