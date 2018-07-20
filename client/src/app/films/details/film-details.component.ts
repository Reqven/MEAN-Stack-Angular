import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../film.service';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './film-details.component.html'
})
export class FilmDetailsComponent {
  _id: String;
  deleted = false;
  init = false;
  film;


  constructor(private Film: FilmService, private route: ActivatedRoute, private titleService: Title) {
    this.titleService.setTitle("Film");
  }

  ngOnInit() {   
    this._id = this.route.snapshot.params['id'];
    this.Film.getFilm(this._id).subscribe(film => {
      this.film = film;
      this.init = true;
      this.titleService.setTitle("Film - " + this.film.title);
    }, (err) => {
      console.log(err);
      this.init = true;
    });
  }

  getImage() {
    return "url('" + this.film.image + "')";
  }

  deleteFilm() {
    this.Film.deleteFilm(this._id).subscribe(film => {
      this.deleted = true;
      this.film = null;
      this.titleService.setTitle("Deleted");
    }, (err) => {
      console.error(err);
      this.deleted = false;
      this.film = null;
      this.titleService.setTitle("Error");
    });
  }
}
