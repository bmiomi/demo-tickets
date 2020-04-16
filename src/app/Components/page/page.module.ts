import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//Componentes Personales.
import { PagesComponent } from './pages.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TicketComponent} from './ticket/ticket.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { TviewComponent } from './ticket/tview.component';
//Rutas
import { routes } from './routing.module';
//Modulos
import { ShareModule } from '../../Components/shared/share.module';

@NgModule({
  
  declarations: [DashbordComponent,HomeComponent,
                  PerfilComponent,TicketComponent,
                  AcountSettingsComponent,TviewComponent,
                  PagesComponent],
  
  imports:      [CommonModule,ShareModule,FormsModule,
                 ReactiveFormsModule,RouterModule.forChild(routes)],

  exports:      [DashbordComponent,HomeComponent,PerfilComponent,
                TicketComponent, AcountSettingsComponent,TviewComponent,
                PagesComponent]
})

export class PageModule { }