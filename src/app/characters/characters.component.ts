import { Component, OnInit } from '@angular/core';
import { GOTHTTPService } from '../got-http.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public AllCharacters: any = []

  constructor(private gotHttpService: GOTHTTPService) { }

  public getCharacters(): any {
    this.gotHttpService = this.gotHttpService.getAllCharacters().subscribe(
      data => {
        this.AllCharacters = data;
        console.log(data);
        console.log(this.AllCharacters);
        for (let character of this.AllCharacters) {
          console.log(character.aliases);
        }
        this.AllCharacters.sort(function (a, b) {
          let nameA = a.aliases[0].toLowerCase(), nameB = b.aliases[0].toLowerCase()
          if (nameA < nameB)
            return -1
          if (nameA > nameB)
            return 1
          return 0
        })
      },
      error => {
        console.log("Some Error Occured");
        console.log(error.errorMessage);
      }
    )
  }

  ngOnInit() {
    this.getCharacters();
  }

}
