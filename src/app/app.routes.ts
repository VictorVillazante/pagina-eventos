import { PaginaPrincipalComponent } from "./components/pagina-principal/pagina-principal.component";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const APP_ROUTES: Routes = [     
    { path: '', component:  PaginaPrincipalComponent},
    { path: 'login', component:  LoginComponent},

];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: false});