import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit{
  datos: any[] = [];
  formulario: FormGroup;
  formularioModificacion: FormGroup;
  elementoAmodificar: any = null;
  mostrarFormularioModificacion: boolean = false;
  confirmacionModificar: boolean = false;


  constructor(private fb: FormBuilder, private http: HttpClient, private sanitizer: DomSanitizer) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      url: ['', Validators.required],
    });

    // Inicializa el formulario de modificación
    this.formularioModificacion = this.fb.group({
      id: [{ value: '', disabled: true }],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      url: ['', Validators.required],
    });

  }

  iniciarModificacion(item: any): void {
    this.elementoAmodificar = item;
    this.formularioModificacion.patchValue({
      id: item.id,
      nombre: item.nombre,
      descripcion: item.descripcion,
      url: item.url,
    });
    this.mostrarFormularioModificacion = true; // Mostrar el formulario de modificación
  }

  modificarElemento(): void {
    if (this.formularioModificacion.valid && this.elementoAmodificar) {
      if (this.confirmacionModificar) {
        // Obtiene los valores del formulario de modificación
        const formData = this.formularioModificacion.value;
  
        // Agrega la ID al cuerpo de la solicitud
        formData.id = this.elementoAmodificar.id;
  
        // Realiza una solicitud POST para modificar el elemento
        this.http.post('http://localhost:8080/archivo', formData).subscribe(
          (response) => {
            console.log(`Elemento con ID ${formData.id} modificado correctamente.`);
            // Limpia el formulario de modificación
            this.formularioModificacion.reset();
            // Actualiza la lista cargando los datos actualizados
            this.actualizarLista();
            this.mostrarFormularioModificacion = false;
          },
          (error) => {
            console.error(`Error al modificar el elemento con ID ${formData.id}:`, error);
          }
        );
      } else {
        console.log('Modificación cancelada.');
      }
    }
  }

  confirmarModificacion(): void {
    // Muestra un cuadro de diálogo de confirmación
    const confirmacion = window.confirm('¿Estás seguro de que deseas modificar este elemento?');
    
    if (confirmacion) {
      this.confirmacionModificar = true;
    } else {
      this.confirmacionModificar = false;
    }
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      const formData = this.formulario.value;

      this.http.post('http://localhost:8080/archivo', formData).subscribe(
        (response) => {
          console.log('Solicitud POST exitosa', response);
          this.actualizarLista();
        },
        (error) => {
          console.error('Error en la solicitud POST', error);
        }
      )
    }
  }

  //



  getYouTubeEmbedUrl(fullUrl: string): SafeResourceUrl {
    // Expresión regular para extraer el videoId de la URL de YouTube.
    const videoIdMatch = fullUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?feature=player_embedded&v=|embed\/videoseries\?list=))([^?&"'>]+)/);
  
    if (videoIdMatch && videoIdMatch[1]) {
      const videoId = videoIdMatch[1];
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    } else {

      return this.sanitizer.bypassSecurityTrustResourceUrl('');
    }
  }

  ngOnInit(): void {
      this.http.get('http://localhost:8080/archivo').subscribe((data: any) => {
        this.datos = data;
      })
  }

  eliminarElemento(id: number): void {
    // Realiza una petición DELETE con el ID correspondiente.
    this.http.delete<boolean>(`http://localhost:8080/archivo/${id}`).subscribe({
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

  actualizarLista(): void {
    // Realiza una solicitud GET para obtener la lista actualizada.
    this.http.get('http://localhost:8080/archivo').subscribe((data: any) => {
      this.datos = data;
    });
  }

  // files: string[];

  // constructor(private storage: Storage) { 
  //   this.files = []
  // }

  // ngOnInit() {
  //   this.getFiles();
  // }

  // uploadFile($event : any) {
  //   const file = $event.target.files[0];
  //   console.log(file);

  //   const fileRef = ref(this.storage, `files/${file.name}`);

  //   uploadBytes(fileRef, file)
  //   .then(response => {
  //     console.log(response)
  //     this.getFiles();
  //   })
  //   .catch(error => console.log(error));

  // }

  // getFiles() {
  //   const filesRef = ref(this.storage, 'files');

  //   listAll(filesRef)
  //   .then(async response => {
  //     console.log(response)
  //     this.files = [];
  //     for(let item of response.items) {
  //       const url = await getDownloadURL(item);
  //       this.files.push(url);
  //       console.log(url)
  //     }
  //   })
  //   .catch(error => console.log(error));
  // }
}
