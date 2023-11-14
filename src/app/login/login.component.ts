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
            const email = user.email;
  
            // Realizar la solicitud GET para verificar si el estudiante ya existe
            this.http.get<any[]>(`http://localhost:8080/estudiante/query?email=${email}`).subscribe(
              (estudiantes) => {
                console.log('Respuesta completa de la solicitud GET:', estudiantes);
            
                if (estudiantes && estudiantes.length === 0) {
                  // Si no existe el estudiante, realizar la solicitud POST
                  const nombre = user.name;
                  const apellido = user.family_name;
            
                  this.http.post('http://localhost:8080/estudiante', {
                    nombre: nombre,
                    email: email,
                    apellido: apellido
                  }).subscribe(
                    (postResponse) => {
                      console.log('Solicitud POST exitosa', postResponse);
                    },
                    (postError) => {
                      console.error('Error en la solicitud POST', postError);
                    }
                  );
                } else {
                  console.log('El estudiante ya existe o hay un problema en la respuesta. No se realiza la solicitud POST.');
                }
              },
              (error) => {
                console.error('Error en la solicitud GET', error);
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
