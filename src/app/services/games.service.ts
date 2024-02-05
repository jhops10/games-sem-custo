import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}

  getBrowserGames(): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}platform=browser`, {
      headers: new HttpHeaders()
        .set(
          environment.XRapidAPIHostHeaderName,
          environment.XRapidAPIHostHeaderValue
        )
        .set(
          environment.XRapidAPIHostKeyHeaderName,
          environment.XRapidAPIHostKeyHeaderValue
        ),
    });
  }
}
