import {Pipe, PipeTransform} from '@angular/core';

 @Pipe({name: 'keys'})
 export class KeysPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let keys = [];
   
    if (value) {
      for (let key in value) {
        keys.push({ key: key, value: value[key] });
      }
    }
    console.log(keys);
    return keys;
  }
}