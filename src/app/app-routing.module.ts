import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { FilesComponent } from './files/files.component';
import { ProfileProfeComponent } from './profile-profe/profile-profe.component';
import { NotasComponent } from './notas/notas.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { UnidadesComponent } from './unidades/unidades.component';
import { UnidadComponent } from './unidad/unidad.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'file',
        component: FilesComponent
      },
      {
        path: 'profile-profe',
        component: ProfileProfeComponent
      },
      {
        path: 'nota',
        component: NotasComponent
      },
      {
        path: 'ejercicio/:id',
        component: EjercicioComponent
      },
      {
        path: 'ejercicios',
        component: EjerciciosComponent
      },
      {
        path: 'unidades',
        component: UnidadesComponent
      },
      {
        path: 'unidad',
        component: UnidadComponent
      },
      {
        path: 'login',
        redirectTo: '/login',
        pathMatch: 'full',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
