import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../../Components/shared/navbar/navbar.component';
import { SidebarComponent } from '../../Components/shared/sidebar/sidebar.component';

import { RouterModule } from '@angular/router';

import { PageModule } from '../../Components/page/page.module';


@NgModule({
  exports:[NavbarComponent,SidebarComponent],
  declarations: [NavbarComponent,SidebarComponent],
  imports: [CommonModule,RouterModule ],
})



export class ShareModule { }