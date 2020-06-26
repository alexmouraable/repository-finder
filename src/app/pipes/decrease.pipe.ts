import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decrease'
})
export class DecreasePipe implements PipeTransform {
  transform(value: string): string {
    let decreasedValue: string = value;

    if(value && value.length > 120) {
      decreasedValue = value.substring(0, 120) + "...";
    }

    return decreasedValue;
  }
}
