import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  cartas: mainInfo[] = [];

  constructor(private mainService: MainService) {
    this.cartas = this.mainService.getCartas();
  }

}

export interface mainInfo {
  title: string;
  Image: string;
  descripcion: string;
  id: string;
}
