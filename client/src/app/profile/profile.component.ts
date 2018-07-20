import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  details: UserDetails;

  constructor(private auth: AuthenticationService, private titleService: Title) {
    this.titleService.setTitle("Profile");
  }
  
  ngOnInit() {    
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }
}
