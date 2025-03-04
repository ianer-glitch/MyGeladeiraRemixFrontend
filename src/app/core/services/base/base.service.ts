import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  
 
  constructor(private http: HttpClient,  @Inject('baseUrl') private baseUrl: string) {
    
  }

  private createHeaders(): HttpHeaders {
    const token:string = localStorage.getItem('token') ?? ""
    
    
    let headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
    });

    // If a token is provided, add the Authorization header
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  
  protected get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(this.baseUrl + endpoint, { headers: this.createHeaders(), params })
      .pipe(
        catchError(this.handleError)
      );
  }

 
  protected post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(this.baseUrl + endpoint, data, { headers: this.createHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  protected patch<T>(endpoint: string, data: any): Observable<T> {
    return this.http.patch<T>(this.baseUrl + endpoint, data, { headers: this.createHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

 
  protected put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(this.baseUrl + endpoint, data, { headers: this.createHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }


  protected delete<T>(endpoint: string, body: any): Observable<T> {
    return this.http.request<T>('DELETE', this.baseUrl + endpoint, {
      body: body,
      headers: this.createHeaders()
    }).pipe(
      catchError(this.handleError)
    );
  }
  

  // Error handler for the HTTP requests
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error;
  }


}
