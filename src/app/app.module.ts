import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FootBarComponent } from './components/nav/foot-bar/foot-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { BasicoComponent } from './components/forms/basico/basico.component';
import { AnidadoComponent } from './components/forms/anidado/anidado.component';
import { ArregloComponent } from './components/forms/arreglo/arreglo.component';
import { ValidadoComponent } from './components/forms/validado/validado.component';
import { MaterialModule } from './modules/material/material.module';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MatCardModule } from '@angular/material/card';

// Locale para pipes
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';

registerLocaleData(localeES);

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    TaskListComponent,
    TaskComponent,
    TaskFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavBarComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    FootBarComponent,
    ListaContactosComponent,
    ContactsPageComponent,
    ContactDetailPageComponent,
    BasicoComponent,
    AnidadoComponent,
    ArregloComponent,
    ValidadoComponent,
    EjemploPipesComponent,
    RandomUserComponent,
    RandomContactPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Agregamos el modulo para bindeos de dos direcciones
    FormsModule,
    BrowserAnimationsModule,
    // Importamos nuestro modulo personalizado ListsModule
    ListsModule,
    // Importamos el modulo http para las peticiones
    HttpClientModule,
    // Modulo para formularios reactivos
    ReactiveFormsModule,
    // Importamos nuestro modulo de material
    MaterialModule,
    MatCardModule,
  ],
  providers: [
    // Registramos el locale ES
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
