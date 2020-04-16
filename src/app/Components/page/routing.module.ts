import { HomeComponent } from "../../Components/page/home/home.component";
import { DashbordComponent } from "../../Components/page/dashbord/dashbord.component";
import { PerfilComponent } from "../../Components/page/perfil/perfil.component";
import { TicketComponent } from "../../Components/page/ticket/ticket.component";
import { TviewComponent } from "../../Components/page/ticket/tview.component";
import { PagesComponent } from "../../Components/page/pages.component";

import { Routes } from "@angular/router";


export const routes: Routes = [
  { path: '',component:PagesComponent,children :[
    { path: "dashbord", component: DashbordComponent },
    { path: "home",component: HomeComponent},
    { path: "perfil", component: PerfilComponent },
    { path: "TRegistro", component: TicketComponent },
    { path: "VTRegistro", component: TviewComponent },
    { path: "**", pathMatch: "full", redirectTo: "dashbord" }
  ]}
]

