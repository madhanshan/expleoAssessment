import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseURL = "https://api.coingecko.com/api/v3/coins/"
  //private REST_API_Market = "markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  
  //https://api.coingecko.com/api/v3/coins/bitcoin?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false

  constructor(private httpClient: HttpClient)  { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(pageNumber:any,records2Show:any){
    const REST_API_Market = "markets?vs_currency=EUR&order=market_cap_desc&per_page="+records2Show+"&page="+pageNumber+"&sparkline=false";
    return this.httpClient.get(this.baseURL + REST_API_Market).pipe(catchError(this.handleError));
  }

  public getProductView(id:any){
    
    return this.httpClient.get(this.baseURL+id+'?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false').pipe(catchError(this.handleError));
  }
 
}
