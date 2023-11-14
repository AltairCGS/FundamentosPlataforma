import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css']
})
export class UnidadComponent implements OnInit{
  datos: any[] = [];
  ejercicios: any[] = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/archivo').subscribe((data: any) => {
      this.datos = data;
    })

    this.http.get('http://localhost:8080/ejercicio').subscribe((data: any) => {
      this.ejercicios = data;
    })
  }

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

}
