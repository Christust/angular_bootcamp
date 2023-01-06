import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Agregamos el modulo para bindeos de dos direcciones
    FormsModule,
    BrowserAnimationsModule,
    // Importamos nuestro modulo personalizado ListsModule
    ListsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
