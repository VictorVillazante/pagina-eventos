import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegistrateComponent } from './components/registrate/registrate.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { RegistrarEventosComponent } from './components/registrar-eventos/registrar-eventos.component';
import { ActualizarEventosComponent } from './components/actualizar-eventos/actualizar-eventos.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { DetallesEventoComponent } from './components/detalles-evento/detalles-evento.component';
import { MisEventosComponent } from './components/mis-eventos/mis-eventos.component';
import { BuscadorEventosComponent } from './components/buscador-eventos/buscador-eventos.component';
import { environment } from 'src/environments/environment';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    SpinnerComponent,
    NavbarComponent,
    LoginComponent,
    RegistrateComponent,
    EventosComponent,
    RegistrarEventosComponent,
    ActualizarEventosComponent,
    MiPerfilComponent,
    DetallesEventoComponent,
    MisEventosComponent,
    BuscadorEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    APP_ROUTING,
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    OAuthModule.forRoot(),
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
