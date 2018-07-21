import { Component, OnInit } from '@angular/core';
import { GOTHTTPService } from '../got-http.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public AllBooks:any=[]

  constructor(private gotHttpService:GOTHTTPService) { }

  public getBooks(): any{
    this.gotHttpService = this.gotHttpService.getAllBooks().subscribe(
      data =>{
        this.AllBooks = data;
        console.log(data);
        console.log(this.AllBooks);
        for(let book of this.AllBooks){
          console.log(book.name);
        }
        this.AllBooks.sort(function(a, b){
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
    this.getBooks();
  }

}
