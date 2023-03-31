import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalID'
})
export class NationalIDPipe implements PipeTransform {
  // ID: string="";
  birthdate: string="";
  transform(ID: string,format:string):string{
    if (ID && ID.length == 14 ) 
    {
      
      const year = ID.substring(1, 3);
      // console.log(year);
      const month = ID.substring(3, 5);
      // console.log(month);
      const day = ID.substring(5, 7);
      // console.log(day);

      if(ID.substring(0, 1)=="2")
      {
        if(format=="DD"||format=="dd")
        {
        this.birthdate =`BrithDate-->Day:${day}`;
        return this.birthdate;
        }
        else if(format=="MM"||format=="mm")
        {
          this.birthdate =`BrithDate-->Month:${month}`;
        return this.birthdate;
        }
        else if(format=="YY"||format=="yy")
        {
          this.birthdate =`BrithDate-->Year: 19${year}`;
        return this.birthdate;
        }
        else
        {
          this.birthdate =`BrithDate: 19${year}-${month}-${day}`;
          return this.birthdate;
        }
      }
      
      
      console.log(this.birthdate );
      // return this.birthdate;
      
      
    }
    else{
      this.birthdate ="Invalid Nationality number";
      
    }
    return this.birthdate;
  }

}
