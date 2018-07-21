import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(AllBooks: any, term: any): any {
    //check if term is undefined
    if(term === undefined) return AllBooks;
    //return updated AllBooks array
    return AllBooks.filter(function(book){
      return book.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
