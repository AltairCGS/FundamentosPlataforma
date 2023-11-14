import { Component } from '@angular/core';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent {
  unidades = [
    { id: 1, titulo: 'Unidad 1: Introducción a Algoritmos', descripcion: 'Explora los conceptos básicos de los algoritmos y su importancia en la resolución de problemas. Comprende cómo los algoritmos forman la base del pensamiento algorítmico.' },
    { id: 2, titulo: 'Unidad 2: Estructuras de Datos', descripcion: 'Sumérgete en las diversas estructuras de datos como listas, pilas y colas. Aprende a seleccionar y aplicar las estructuras de datos adecuadas para diferentes situaciones problemáticas.' },
    { id: 3, titulo: 'Unidad 3: Estrategias de Resolución de Problemas', descripcion: 'Desarrolla habilidades prácticas para abordar problemas algorítmicos de manera efectiva. Explora estrategias comunes utilizadas por los profesionales de la informática.' }
  ];
}
