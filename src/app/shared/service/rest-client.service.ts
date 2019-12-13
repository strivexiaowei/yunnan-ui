import { Injectable } from '@angular/core';
import { RequestMethod, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root'
})
export class RestClientService {
  methodMapping = new Map<string, RequestMethod>([
    ['get', RequestMethod.Get],
    ['meta', RequestMethod.Get],
    ['*', RequestMethod.Post]
  ]);
  getRequestMethod(action: string): RequestMethod {
    const method = this.methodMapping.get(action);
    if (method === undefined) {
      return this.methodMapping.get('*');
    } else {
      return method;
    }
  }
  request(
    module: string,
    id: string,
    action: string,
    params: {}
  ) {
    const requestMethod = this.getRequestMethod(action);
    if (RequestMethod.Post === requestMethod) {
      const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
      return this.http
        .post(module + '/' + id + '/' + action, params, { headers: headers })
        .pipe(catchError(this.handleError))
    }
    const getParams = new HttpParams();
    for (const p in params) {
      if (params.hasOwnProperty(p)) {
        getParams.set(p, params[p]);
      }
    }
    return this.http
      .get(module + '/' + id + '/' + action, {
        params: getParams,
      })
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  constructor(private http: HttpClient) { }
}
