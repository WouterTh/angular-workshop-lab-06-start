import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textArray'
})
export class TextArrayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
