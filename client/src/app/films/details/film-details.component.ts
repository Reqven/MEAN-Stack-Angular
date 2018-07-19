import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../film.service';

@Component({
  templateUrl: './film-details.component.html'
})
export class FilmDetailsComponent {
  _id: String;
  deleted = false;
  init = false;
  film;


  constructor(private Film: FilmService, private route: ActivatedRoute) {}

  ngOnInit() {   
    this._id = this.route.snapshot.params['id'];
    this.Film.getFilm(this._id).subscribe(film => {
      this.film = film;
      this.init = true;
    }, (err) => {
      console.log(err);
      this.init = true;
    });
  }

  deleteFilm() {
    this.Film.deleteFilm(this._id).subscribe(film => {
      this.deleted = true;
      this.film = null;
    }, (err) => {
      console.error(err);
      this.deleted = false;
      this.film = null;
    });
  }
}
