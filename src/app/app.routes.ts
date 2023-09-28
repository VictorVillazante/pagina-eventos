import { PaginaPrincipalComponent } from "./components/pagina-principal/pagina-principal.component";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrateComponent } from './components/registrate/registrate.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { RegistrarEventosComponent } from './components/registrar-eventos/registrar-eventos.component';
import { ActualizarEventosComponent } from './components/actualizar-eventos/actualizar-eventos.component';
import { DetallesEventoComponent } from './components/detalles-evento/detalles-evento.component';
import { MisEventosComponent } from './components/mis-eventos/mis-eventos.component';
import { BuscadorEventosComponent } from './components/buscador-eventos/buscador-eventos.component';

const APP_ROUTES: Routes = [     
    { path: '', component:  PaginaPrincipalComponent},
    { path: 'login', component:  LoginComponent},
    { path: 'registrate', component:  RegistrateComponent},
    { path: 'mi-perfil', component:  MiPerfilComponent},
    { path: 'eventos', component:  EventosComponent},
    { path: 'eventos/registrar', component:  RegistrarEventosComponent},
    { path: 'eventos/actualizar', component:  ActualizarEventosComponent},
    { path: 'detalles-evento/:id', component:  DetallesEventoComponent},
    { path: 'mis-eventos', component:  MisEventosComponent},
    { path: 'buscador-eventos/:nombre', component:  BuscadorEventosComponent},

];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: false});