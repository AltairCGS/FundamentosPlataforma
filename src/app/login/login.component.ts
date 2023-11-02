import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(public auth: AuthService, private router: Router, private http: HttpClient) {}
  // ngOnInit(): void {
  //   this.auth.isAuthenticated$.subscribe(isAunthenticated => {
  //     if(isAunthenticated) {
  //       this.router.navigate(["/main"])
        
  //     }
  //   })
  // }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.auth.user$.subscribe(user => {
          if (user) {
            // Aquí puedes acceder a los datos del usuario
            const nombre = user.name; // Obtén el nombre del usuario
            const emal = user.email; // Obtén el correo del usuario
            const apellido = user.family_name; // Sustituye con el atributo correcto que contiene el apellido
  
            // Realiza la solicitud POST con los datos del usuario
            this.http.post('http://localhost:8080/estudiante', {
              nombre: nombre,
              email: emal,
              apellido: apellido
            }).subscribe(
              (response) => {
                console.log('Solicitud POST exitosa', response);
              },
              (error) => {
                console.error('Error en la solicitud POST', error);
              }
            );
          }
        });
  
        this.router.navigate(['/main']);
      }
    });
  }

  login() {
    this.auth.loginWithRedirect()
  }

}
