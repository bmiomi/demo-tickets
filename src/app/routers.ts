import { Routes } from '@angular/router';
import { LoginComponent }    from './Components/login/login.component';

import { RegistroComponent } from './Components/registro/registro.component';

import {AuthGuardsGuard } from '../Guard/auth-guards.guard';

export const routes: Routes = [
  {path:'Login', component: LoginComponent},
  {path:'Register',component:RegistroComponent},
  {path:'',pathMatch:'full',redirectTo:'Login'},
];

