import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

//import Observable related code
import { Observable, observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GOTHTTPService {

  public baseurl = "https://www.anapioficeandfire.com/api";

  constructor(private _http:HttpClient) { }

  public handleError(err:HttpErrorResponse) {
    console.log("Handle error http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public getAllBooks():any{
    let response = this._http.get(this.baseurl+'/books');
    console.log(response);
    return response;
  }

  public getAllHouses():any{
    let response = this._http.get(this.baseurl+'/houses');
    console.log(response);
    return response;
  }

  public getAllCharacters():any{
    let response = this._http.get(this.baseurl+'/characters');
    console.log(response);
    return response;
  }

  public getSingleBook(currentBookId): any{
    let response = this._http.get(this.baseurl + '/books' + '/' + currentBookId);
    return response;
  }

  public getSingleHouse(currentHouseId): any{
    let response = this._http.get(this.baseurl + '/houses' + '/' + currentHouseId);
    return response;
  }

  public getSingleCharacter(currentCharacterId): any{
    let response = this._http.get(this.baseurl + '/characters' + '/' + currentCharacterId);
    return response;
  }
}
