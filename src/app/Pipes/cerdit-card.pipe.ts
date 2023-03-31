import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cerditCard'
})
export class CerditCardPipe implements PipeTransform {
  cradit:string=""
  transform(value: string): string {
    const th1=value.substring(0,4);
    const th2=value.substring(4,8);
    const th3=value.substring(8,12);
    const th4=value.substring(12,16);
    this.cradit=th1+"-"+th2+"-"+th3+"-"+th4
      return this.cradit;
    }

}
