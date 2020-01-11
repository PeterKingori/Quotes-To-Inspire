import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countDays'
})
export class CountDaysPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithoutTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.floor(todayWithoutTime - value);
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference * 0.001;
    var daysCounter = dateDifferenceSeconds / secondsInDay;
    
    if (daysCounter > 0) {
      return daysCounter;
    }
    else return 0;
  }
}
