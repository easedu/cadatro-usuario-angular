import { Pipe, PipeTransform } from '@angular/core';
import { User } from "src/app/class/user.model";
import * as _ from 'lodash';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: User[], column: string, order = ''): User[] {
    if (!value || !column || column === '' || order === '') { return value; } // no array
    if (value.length <= 1) { return value; } // array with only one item
    return _.orderBy(value, [column], [order]);
  }

}
