import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';

@NgModule({
  declarations: [AppComponent, SaludoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Agregamos el modulo para bindeos de dos direcciones
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
