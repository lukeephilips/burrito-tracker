import {Pipe, PipeTransform, Input} from '@angular/core';
import {Burrito} from './burrito.model';



@Pipe({
  name: "type",
  pure: false
})


export class TypePipe implements PipeTransform {

  transform(input: Burrito[], type: string, types: string[]) {
    var output: Burrito[] = [];
    console.log(Burrito.typesList)
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
    } else if (type === "Carne asada") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Carne asada") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (type === "Carnitas") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Carnitas") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (type === "Veggie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Veggie") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (type === "Chile verde") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Chile verde") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
