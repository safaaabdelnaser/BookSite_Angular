import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateOperation'
})
export class DateOperationPipe implements PipeTransform {

  transform(value: number,currentPrice:number=30): number {
    return value*currentPrice;
  
  }

}
