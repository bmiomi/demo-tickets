import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TicketComponent} from './ticket/ticket.component';

import { ShareModule } from '../../Components/shared/share.module';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';


@NgModule({
  imports: [CommonModule,RouterModule,ShareModule,FormsModule,ReactiveFormsModule],
  exports:[DashbordComponent,HomeComponent,PerfilComponent,TicketComponent],
  declarations: [DashbordComponent,HomeComponent,PerfilComponent,TicketComponent, AcountSettingsComponent]
})

export class PageModule { }