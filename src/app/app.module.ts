import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { ContenidoPrincipalComponent } from './components/contenido-principal/contenido-principal.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { FormularioLogInComponent } from './components/formulario-log-in/formulario-log-in.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    ContenidoPrincipalComponent,
    MenuPrincipalComponent,
    FormularioLogInComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
