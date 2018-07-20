import { Component } from '@angular/core';
import { FilmService } from '../../film.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './film-create.component.html'
})
export class FilmCreateComponent {
  film = {
    title: '',
    author: '',
    year: '',
    image: ''
  };

  constructor(private Film: FilmService, private router: Router, private titleService: Title) {
    this.titleService.setTitle("New film");
  }

  setTitle() {
    this.titleService.setTitle("New film - " + this.film.title);
  }

  create() {
    this.Film.createFilm(this.film).subscribe(response => {
      this.router.navigateByUrl('/films');
      console.log(response);      
    }, (err) => {
      console.error(err);
    });
  }
}
