import {Pipe, PipeTransform} from '@angular/core';
import {Burrito} from './burrito.model';

@Pipe({
  name: "type",
  pure: false
})


export class TypePipe implements PipeTransform {
  transform(input: Burrito[], type) {
    var output: Burrito[] = [];
    if( type === "Chicken") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Chicken") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (type === "Beef") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Beef") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (type === "all") {
      for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
      }
      return output;
    } else {
      return input;
    }
  }
}
