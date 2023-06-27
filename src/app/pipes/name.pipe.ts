import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipe'
})
export class NamePipe implements PipeTransform {

  transform(value: string[], searchText: string): string[] {
    return value.filter(x => x.toLowerCase()
    .includes(searchText.toLowerCase()));
  }

}
