import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent {

  ejercicio: any; // 

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  guardarEjercicio(ejercicio: any) {
    this.http.post('http://localhost:8080/ejercicio', ejercicio).subscribe((response: any) => {
      console.log('Ejercicio guardado:', response);
    });
  }

  ngOnInit(): void {
    // Obtener el identificador del ejercicio de la ruta
    const ejercicioId = this.route.snapshot.params['id'];

    // Cargar el ejercicio específico
    this.http.get(`http://localhost:8080/ejercicio/${ejercicioId}`).subscribe((data: any) => {
      this.ejercicio = data;
      console.log('Datos del ejercicio:', this.ejercicio);
    });
  }
}