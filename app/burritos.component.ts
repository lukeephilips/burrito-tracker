import { Component, Input } from '@angular/core';
import { Burrito } from './burrito.model';



@Component({
  selector: 'burritos',
  templateUrl: './app/burritos.component.html'
})

export class BurritosComponent {
  @Input() childBurritosList: Burrito[];

}
