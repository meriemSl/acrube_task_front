import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

const httpHeader = {
  headers: new HttpHeaders({
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Headers":"*"
  })
};

@Injectable({
  providedIn: 'root'
})


export class UrlsService {

  constructor(private http: HttpClient) {}

  postApi(url: string, body: any): any {
    return this.http.post(url, body, httpHeader)
    .pipe(
      catchError(this.handleError)
    );
  }


  // New Normal text/json
  getApi(url: string): any {
    return this.http.get(url, httpHeader)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error.message)}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.',
    );
  }

}
