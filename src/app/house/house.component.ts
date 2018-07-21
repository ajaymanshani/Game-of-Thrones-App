import { Component, OnInit } from '@angular/core';
import { GOTHTTPService } from '../got-http.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  public AllHouses:any=[]

  constructor(private gotHttpService:GOTHTTPService) { }

  public getHouses(): any {
    this.gotHttpService = this.gotHttpService.getAllHouses().subscribe(
      data => {
        this.AllHouses = data;
        console.log(data);
        console.log(this.AllHouses);
        for (let house of this.AllHouses){
          console.log(house.name);
        }
        this.AllHouses.sort(function(a,b){
          let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
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
    this.getHouses();
  }

}
