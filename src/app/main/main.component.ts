import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { MainService } from '../main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  contenidos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.http.get('http://localhost:8080/ContenidoMain').subscribe((data: any) => {
        this.contenidos = data
        console.log('Datos de la API:', this.contenidos);
      })
  }
  // cartas: mainInfo[] = [];

  // constructor(private mainService: MainService) {
  //   this.cartas = this.mainService.getCartas();
  // }

}

// export interface mainInfo {
//   title: string;
//   Image: string;
//   descripcion: string;
//   id: string;
// }
