import { Injectable } from '@angular/core';
import { mainInfo } from './main/main.component';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  cartas: mainInfo[] = [
    {
      title: 'Calendario',
      Image:
        'https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2668&q=80',
      descripcion:
        '¡No te pierdas nuestros eventos destacados y mantente al tanto de las últimas novedades en el mundo de la programación!',
      id: '1',
    },
    {
      title: 'Actualizaciones',
      Image:
        'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      descripcion:
        'Descubre las emocionantes actualizaciones que hemos preparado para mejorar tu experiencia. ¡Mantente informado y disfruta de las novedades!',
      id: '2',
    },
    {
      title: 'Recursos Relevantes',
      Image:
        'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      descripcion:
        'Explora nuestra selección de recursos esenciales para enriquecer tu aprendizaje en pensamiento algorítmico. Encuentra libros, videos, y tutoriales recomendados.',
      id: '3',
    },
    {
      title: 'Proyectos Destacados',
      Image:
        'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80',
      descripcion:
        'Explora nuestros proyectos destacados para aplicar tus habilidades en pensamiento algorítmico en desafíos prácticos y creativos. ¡Empieza a programar hoy!',
      id: '4',
    },
    {
      title: 'Foro de Discusión',
      Image:
        'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      descripcion:
        'Fomenta la interacción y resuelve tus dudas en nuestro animado foro de discusión sobre pensamiento algorítmico y programación. Únete a la conversación hoy mismo.',
      id: '5',
    },
    {
      title: 'Logros',
      Image:
        'https://images.unsplash.com/photo-1614036417651-efe5912149d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2719&q=80',
      descripcion:
        'Descubre los logros más destacados de nuestros estudiantes y el reconocimiento que merecen por su excelencia en el pensamiento algorítmico.',
      id: '6',
    },
    {
      title: 'Preguntas Frecuentes',
      Image:
        'https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      descripcion:
        'Obtén respuestas rápidas a tus dudas comunes sobre pensamiento algorítmico y nuestra plataforma educativa. Simplificamos tus preguntas frecuentes.',
      id: '7',
    },
    {
      title: 'Testimonios',
      Image:
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      descripcion:
        'Descubre lo que nuestros estudiantes tienen que decir sobre su experiencia de aprendizaje en pensamiento algorítmico y éxito académico.',
      id: '8',
    },
    {
      title: 'Noticias Destacadas',
      Image:
        'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      descripcion:
        'Descubre las últimas noticias y avances en el mundo del pensamiento algorítmico. Mantente informado sobre novedades y tendencias importantes.',
      id: '9',
    },
  ];
  constructor() { }

  getCartas() {
    return this.cartas;
  }
}
