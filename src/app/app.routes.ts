import { PaginaPrincipalComponent } from "./components/pagina-principal/pagina-principal.component";
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [     
    { path: '', component:  PaginaPrincipalComponent},
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: false});