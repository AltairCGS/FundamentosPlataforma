import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';

import { AuthModule } from '@auth0/auth0-angular';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FilesComponent } from './files/files.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileProfeComponent } from './profile-profe/profile-profe.component';
import { NotasComponent } from './notas/notas.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    LayoutComponent,
    FilesComponent,
    HeaderComponent,
    SidebarComponent,
    ProfileProfeComponent,
    NotasComponent,
    EjercicioComponent,
    EjerciciosComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-01zd21ssgzmznj46.us.auth0.com',
      clientId: 'r5QLd5pcIKVeHS93ZRdn9Ysrfbd1HuF4',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
