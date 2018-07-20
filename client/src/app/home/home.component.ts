import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Title } from '@angular/platform-browser';


@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(public auth: AuthenticationService, private titleService: Title) {
    this.titleService.setTitle("Home");
  }
}
