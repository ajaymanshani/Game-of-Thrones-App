import { Component, OnInit } from '@angular/core';
import { GOTHTTPService } from '../got-http.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-house-info',
  templateUrl: './house-info.component.html',
  styleUrls: ['./house-info.component.css']
})
export class HouseInfoComponent implements OnInit {
  public currentHouseId: any;
  public currentHouse;

  constructor(
    private gotHttpService: GOTHTTPService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.currentHouseId = this.route.snapshot.paramMap.get('currentHouseId');
    this.getHouseDetails(this.currentHouseId)
  }

  getHouseDetails(Id) {
    this.gotHttpService.getSingleHouse(Id).subscribe(
      data=> {
        this.currentHouse = data;
      },
      error=> {
        console.log("Some Error Occured")
        console.log(error.errorMessage)
      }
    )
  }

  goBack(): void {
    this.location.back();
  }


}
