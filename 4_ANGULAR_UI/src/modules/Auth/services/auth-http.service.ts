import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State } from '@app/store';
import { AuthTokensSelectors } from '@auth/store/selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthHTTPService {
  constructor(private http: HttpClient, private store: Store<State>) {}

  public get(url: string): Observable<any> {
    return this.getHttpOptions('application/json').pipe(
      switchMap((httpOptions) => this.http.get(url, httpOptions))
    );
  }

  public post(url: string, body: any): Observable<any> {
    return this.getHttpOptions('application/json').pipe(
      switchMap((httpOptions) => this.http.post(url, body, httpOptions))
    );
  }

  public put(url: string, body: any): Observable<any> {
    return this.getHttpOptions('application/json').pipe(
      switchMap((httpOptions) => this.http.put(url, body, httpOptions))
    );
  }

  public delete(url: string): Observable<any> {
    return this.getHttpOptions('application/json').pipe(
      switchMap((httpOptions) => this.http.delete(url, httpOptions))
    );
  }

  private getHttpOptions(contentType: string): Observable<any> {
    return this.getAuthHttpHeaders(contentType).pipe(
      map((authHttpHeaders) => ({
        headers: authHttpHeaders,
      }))
    );
  }

  private getAuthHttpHeaders(contentType: string): Observable<any> {
    return this.store.select(AuthTokensSelectors.getIdToken).pipe(
      map(
        (idToken) =>
          new HttpHeaders({
            'Content-Type': contentType,
            Authorization: idToken,
          })
      )
    );
  }
}
