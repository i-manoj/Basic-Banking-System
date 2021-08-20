import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emails'
})
export class EmailsPipe implements PipeTransform {

  transform(value:any): any {
      let i = value.indexOf("@");
      return value.substring(0,i);
  }

}
