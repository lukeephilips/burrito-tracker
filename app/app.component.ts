import { Component } from '@angular/core';
import { Burrito } from './burrito.model';
import { BurritosComponent } from './burritos.component';
import { NewBurritoComponent } from './new-burrito.component';
import { EditBurritoComponent } from './edit-burrito.component';



@Component({
  selector: 'root',
  templateUrl: './app/app.component.html'
})

export class AppComponent {
  selectedBurrito: Burrito = null;
  types: string[] = new Burrito('','',false, 0, '').typesList;

  masterBurritosList: Burrito[] = [
    new Burrito('Carne asada', 'Cancun Taqueria', true, 1000, '2017-01-12'),
    new Burrito('Chicken', 'Taqueria el Buen Sabor', false, 600, '2016-12-24'),
    new Burrito('Chile verde', 'El Farolito', true, 1200, '2017-01-03')
  ]
  addBurrito(newBurrito){
    this.masterBurritosList.push(newBurrito);
  }
  selectBurrito(burrito) {
  this.selectedBurrito = burrito;
  }
  addType(type){
    debugger;
    if (!this.types.includes(type)) {
      this.types.push(type);
    }
  }
}
