import { Component } from '@angular/core';
import { FilmService } from '../film.service';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './films.component.html'
})
export class FilmsComponent {
  films;

  constructor(private Film: FilmService, private titleService: Title) {
    this.titleService.setTitle("Films");
  }

  ngOnInit() {    
    this.Film.getFilms().subscribe(films => {
      this.films = films;
    }, (err) => {
      console.error(err);
    });
  }

  getImage(image) {
    return "url('" + image + "')";
  }
}
