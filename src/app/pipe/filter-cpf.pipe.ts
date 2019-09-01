import { Pipe, PipeTransform } from '@angular/core';
import { User } from "src/app/class/user.model";

@Pipe({
  name: 'filterCpf'
})
export class FilterCpfPipe implements PipeTransform {

  transform(value: User[], filterBy: string): User[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((user: User) =>
      user.cpf.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
