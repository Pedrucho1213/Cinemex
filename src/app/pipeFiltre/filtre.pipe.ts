import { Pipe, PipeTransform } from '@angular/core';
import {PopularFilms} from '../interface/popular-films';

@Pipe({
  name: 'filtre',
  pure: false
})
export class FiltrePipe implements PipeTransform {

  transform(items: PopularFilms[], filter: string): any {
    if(!items || !filter){
      return items;
    }
    return items.filter(item => item.title.indexOf(filter) !== -1);
  }

}
