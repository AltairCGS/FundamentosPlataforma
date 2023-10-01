import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(public auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAunthenticated => {
      if(isAunthenticated) {
        this.router.navigate(["/main"])
      }
    })
  }

  login() {
    this.auth.loginWithRedirect()
  }

}
