import { Routes } from '@angular/router';
import { LoginComponent }    from './Components/login/login.component';

import { HomeComponent }     from './Components/page/home/home.component';
import { DashbordComponent } from './Components/page/dashbord/dashbord.component';
import { PerfilComponent }   from './Components/page/perfil/perfil.component';
import { RegistroComponent } from './Components/registro/registro.component';
import {TicketComponent}     from './Components/page/ticket/ticket.component';

import {AuthGuardsGuard } from '../Guard/auth-guards.guard';

export const routes: Routes = [
  {path:'Login', component: LoginComponent},
  {path:'Register',component:RegistroComponent},
  {path: 'home', component: HomeComponent,
       children:
       [
          {path: 'dashbord', component: DashbordComponent},
          {path: 'perfil', component: PerfilComponent},
          {path: 'ticket', component: TicketComponent},
          {path:'**',pathMatch:'full',redirectTo:'home'}
        ],canActivate:[AuthGuardsGuard]
  },
  {path:'',pathMatch:'full',redirectTo:'Login'},
];

