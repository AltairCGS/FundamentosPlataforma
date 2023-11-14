import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent {
  formulario: FormGroup;
  ejercicios: any[] = [];

  ngOnInit(): void {
    this.http.get('http://localhost:8080/ejercicio').subscribe((data: any) => {
      this.ejercicios = data;
    });
  }

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.formulario = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      lenguaje: ['', Validators.required],
      dificultad: ['', Validators.required],
      solucion: ['', Validators.required],
      explicacion: ['', Validators.required],
      test: ['', Validators.required],
    });
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      const formData = this.formulario.value;

      this.http.post('http://localhost:8080/ejercicio', formData).subscribe(
        (response) => {
          console.log('Solicitud POST exitosa', response);
          this.actualizarLista()
          this.formulario.reset()

        },
        (error) => {
          console.error('Error en la solicitud POST', error);

        }
      );
    }
  }

  //

  confirmarEliminacion(id: number): void {
    // Muestra una ventana de confirmación al usuario.
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este elemento?');
    
    if (confirmacion) {
      // Si el usuario hizo clic en "Aceptar", procede a eliminar el elemento.
      this.eliminarElemento(id);
    } else {
      // Si el usuario hizo clic en "Cancelar", no hagas nada.
      console.log('Eliminación cancelada.');
    }
  }

  eliminarElemento(id: number): void {
    // Realiza una petición DELETE con el ID correspondiente.
    this.http.delete<boolean>(`http://localhost:8080/ejercicio/${id}`).subscribe({
      next: (eliminado) => {
        if (eliminado) {
          console.log(`Elemento con ID ${id} eliminado correctamente.`);
          // Después de eliminar el elemento, actualiza la lista cargando los datos actualizados.
          this.actualizarLista();
        } else {
          console.error(`Error al eliminar el elemento con ID ${id}: No se pudo eliminar.`);
        }
      },
      error: (error) => {
        console.error(`Error al eliminar el elemento con ID ${id}:`, error);
      }
    });
  }

  actualizarLista(): void {
    // Realiza una solicitud GET para obtener la lista actualizada.
    this.http.get('http://localhost:8080/ejercicio').subscribe((data: any) => {
      this.ejercicios = data;
    });
  }
  

}
