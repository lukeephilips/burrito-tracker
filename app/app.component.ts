import { Component } from '@angular/core';
import { BurritosComponent } from './burritos.component';
import { Burrito } from './burrito.model';

@Component({
  selector: 'root',
  templateUrl: './app/app.component.html'
})

export class AppComponent {
  masterBurritosList: Burrito[] = [
    new Burrito('carne asada', 'Cancun Taqueria', true, 1000, new Date()),
    new Burrito('chicken', 'Taqueria el Buen Sabor', 'false', 600, new Date(2016, 11, 17)),
    new Burrito('chile verde', 'El Farolito', 'true', 1200, new Date(2017, 1, 6))
  ]

}
