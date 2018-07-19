import { Component } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  templateUrl: './films.component.html'
})
export class FilmsComponent {
  films;

  constructor(private Film: FilmService) {}

  ngOnInit() {    
    this.Film.getFilms().subscribe(films => {
      this.films = films;
    }, (err) => {
      console.error(err);
    });
  }
}
