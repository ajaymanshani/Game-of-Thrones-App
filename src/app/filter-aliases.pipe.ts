import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAliases'
})
export class FilterAliasesPipe implements PipeTransform {

  transform(AllCharacters: any, term1: any): any {
    //check if term1 is undefined
    if(term1 == undefined) return AllCharacters;
    //return updated list
    return AllCharacters.filter(function(character){
      return character.aliases[0].toLowerCase().includes(term1.toLowerCase())
    })
  }

}
