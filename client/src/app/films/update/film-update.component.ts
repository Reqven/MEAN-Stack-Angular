import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../../film.service';

@Component({
  templateUrl: './film-update.component.html'
})
export class FilmUpdateComponent {
  _id: String;
  deleted = false;
  init = false;
  film;

  constructor(private Film: FilmService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {    
    this._id = this.route.snapshot.params['id'];
    this.Film.getFilm(this._id).subscribe(film => {
      this.film = film;
      this.init = true;
    }, (err) => {
      console.error(err);
      this.init = true;
    });
  }

  updateFilm() {
    this.Film.updateFilm(this._id, this.film).subscribe(film => {
      this.router.navigateByUrl('/film/' + this._id);
    }, (err) => {
      console.error(err);
      this.deleted = false;
      this.film = null;
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
