import {Pipe, PipeTransform, Input} from '@angular/core';
import {Burrito} from './burrito.model';



@Pipe({
  name: "type",
  pure: false
})


export class TypePipe implements PipeTransform {
  transform(input: Burrito[], type: string) {
    var output: Burrito[] = [];
    var typesList = input[0].typesList;
    if (type === 'all') {
      return input;
    }
    else {
      for (var j = 0; j < typesList.length; j++) {
        if( type === typesList[j]) {
          for (var i = 0; i < input.length; i++) {
            if (input[i].type === typesList[j]) {
              output.push(input[i]);
            }
          }
          return output;
        }
      }
    }
  }
}
