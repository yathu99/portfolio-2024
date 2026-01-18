import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textlimiter'
})
export class TextlimiterPipe implements PipeTransform {

  transform(value: any, length:number=4): string | number {
    if(isNaN(Number(value))){
      return String(value).length>length?String(value).concat(".."):value;
    }
    else{
      const vals = new Map<number,string>([
        [1000,'k'],
        [1000000,'m'],
        [1000000000,'b']
      ])
      let numval = Number(value);
      (Object.keys(vals)).sort((a:any,b:any) => {return Number(a)-Number(b)}).forEach((elem) => {
        let numTypeKey = Number(elem)
        if(numval>numTypeKey-1){

          return String(numval/numTypeKey).substring(0,4).padEnd(3,"0")+vals.get(numTypeKey);  
        }
        return value
      })
      return value
    }
  }

}
