import { Component } from '@angular/core';
import { FilmService } from '../../film.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './film-create.component.html'
})
export class FilmCreateComponent {
  film = {
    title: '',
    author: '',
    year: ''
  };

  constructor(private Film: FilmService, private router: Router) {}

  create() {
    this.Film.createFilm(this.film).subscribe(response => {
      this.router.navigateByUrl('/films');
      console.log(response);      
    }, (err) => {
      console.error(err);
    });
  }
}
