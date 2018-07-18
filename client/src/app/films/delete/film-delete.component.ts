import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmService } from '../../film.service';

@Component({
  templateUrl: './film-.component.html'
})
export class FilmDeleteComponent {
  films;

  constructor(private Film: FilmService, private http: HttpClient) {}

  ngOnInit() {    
    this.Film.getFilms().subscribe(films => {
      this.films = films;
    }, (err) => {
      console.error(err);
    });
  }
}
