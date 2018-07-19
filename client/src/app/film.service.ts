import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';

export interface FilmDetails {
  _id: string;
  title: string;
  author: string;
  year: number;
}

@Injectable()
export class FilmService {

  constructor(private http: HttpClient, private router: Router) {}

  public getFilms(): Observable<any> {
    return this.http.get('/api/films');
  }
  public getFilm(id): Observable<any> {
    return this.http.get('/api/film/'+ id);
  }
  public createFilm(film): Observable<any> {
    return this.http.post('/api/film', film);
  }
  public deleteFilm(id): Observable<any> {
    return this.http.delete('/api/film/'+ id);
  }
  public updateFilm(id, film): Observable<any> {
    return this.http.put('/api/film/'+ id, film);
  }
}