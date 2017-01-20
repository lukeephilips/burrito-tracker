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
  types: string[] = [
    'Carne asada',
    'Chicken',
    'Beef',
    'Veggie',
    'Chile verde',
    'Carnitas'
  ]
  masterBurritosList: Burrito[] = [
    new Burrito('Carne asada', 'Cancun Taqueria', true, 1000, new Date()),
    new Burrito('Chicken', 'Taqueria el Buen Sabor', false, 600, new Date(2016, 11, 17)),
    new Burrito('Chile verde', 'El Farolito', true, 1200, new Date(2017, 1, 6))
  ]
  addBurrito(newBurrito){
    this.masterBurritosList.push(newBurrito);
  }
  selectBurrito(burrito) {
  this.selectedBurrito = burrito;
  console.log(this.selectedBurrito)
  }
}
