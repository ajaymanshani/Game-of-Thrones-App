import { Component, OnInit } from '@angular/core';
import { GOTHTTPService } from '../got-http.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  public currentBookId: any;
  public currentBook;

  constructor(
    private gotHttpService: GOTHTTPService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.currentBookId = this.route.snapshot.paramMap.get('currentBookId');
    this.getBookDetails(this.currentBookId)
  }

  getBookDetails(Id) {
    this.gotHttpService.getSingleBook(Id).subscribe(
      data=> {
        this.currentBook = data;
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
