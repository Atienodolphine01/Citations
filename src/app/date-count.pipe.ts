import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, ...args: any): any {

    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) // less than 30 seconds ago show as 'Just now'
          return 'Just now';
      const intervals = {
            'year': 31536000,
            'month': 2592000,
            'week': 604800,
            'day': 86400,
            'hour': 3600,
            'minute': 60,
            'second': 1
      };
      
      let count;
      for (const i in intervals) {
          count = Math.floor(seconds / intervals[i]);
          if (count > 0)
              if (count === 1) {
                  return count + ' ' + i + ' ago'; // 1 day ago
              } else {
                  return count + ' ' + i + 's ago'; // 2 days ago
              }
      }
  }
    return value;
  }

}
