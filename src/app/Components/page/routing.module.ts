import { HomeComponent } from "../../Components/page/home/home.component";
import { DashbordComponent } from "../../Components/page/dashbord/dashbord.component";
import { PerfilComponent } from "../../Components/page/perfil/perfil.component";
import { TicketComponent } from "../../Components/page/ticket/ticket.component";
import { TviewComponent } from "../../Components/page/ticket/tview.component";

import { Routes } from "@angular/router";


export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "dashbord", component: DashbordComponent },
      { path: "perfil", component: PerfilComponent },
      { path: "TRegistro", component: TicketComponent },
      { path: "VTRegistro", component: TviewComponent },
      { path: "**", pathMatch: "full", redirectTo: "home" }
    ],
  }
];
