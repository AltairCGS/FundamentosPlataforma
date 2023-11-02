import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent {

  ejercicioData: any[] = [];

  constructor(private http: HttpClient) {}

  guardarEjercicio(ejercicio: any) {
    

    this.http.post('http://localhost:8080/ejercicio', ejercicio).subscribe((response: any) => {
      console.log('Ejercicio guardado:', response);

    });
  }

  ngOnInit(): void {
      this.http.get('http://localhost:8080/ejercicio').subscribe((data: any) => {
        this.ejercicioData = data
        console.log('Datos de la API:', this.ejercicioData);
      })
  }

}
