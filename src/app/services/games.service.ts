import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}

  getBrowserGames(): Observable<Game> {
    return this.http.get<Game>(`${environment.apiBaseUrl}platform=browser`, {
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

  getPcGames(): Observable<Game> {
    return this.http.get<Game>(`${environment.apiBaseUrl}platform=pc`, {
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

  getAllGames(): Observable<Game> {
    return this.http.get<Game>(`${environment.apiBaseUrl}platform=all`, {
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
