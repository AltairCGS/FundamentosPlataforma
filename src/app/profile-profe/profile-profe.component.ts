import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile-profe',
  templateUrl: './profile-profe.component.html',
  styleUrls: ['./profile-profe.component.css']
})
export class ProfileProfeComponent {

  constructor(public auth: AuthService) {
    
  }

}
