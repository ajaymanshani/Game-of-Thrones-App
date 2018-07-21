import { Component, OnInit } from '@angular/core';
import { GOTHTTPService } from '../got-http.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {
  public currentCharacterId: any;
  public currentCharacter;

  constructor(
    private gotHttpService: GOTHTTPService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.currentCharacterId = this.route.snapshot.paramMap.get('currentCharacterId');
    this.getCharacterDetails(this.currentCharacterId)
  }

  getCharacterDetails(Id) {
    this.gotHttpService.getSingleCharacter(Id).subscribe(
      data => {
        this.currentCharacter = data;
      },
      error => {
        console.log("Some Error Occured")
        console.log(error.errorMessage)
      }
    )
  }

  goBack(): void {
    this.location.back();
  }

}
