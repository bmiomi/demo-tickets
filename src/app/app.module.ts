import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Rutas.
import { routes } from './routers';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';

//servicio
import {ServiceFirebaseService} from '../Service/service-firebase.service';
import {RegistroService} from '../Service/registro.service';

import {AuthGuardsGuard} from '../Guard/auth-guards.guard'

import { PageModule } from './Components/page/page.module';
import { ShareModule } from './Components/shared/share.module';

//pipe
import { OrderByPipe } from './Components/Pipes/order-by.pipe';


@NgModule({
  
  imports: 
  [ ReactiveFormsModule,BrowserModule, 
   FormsModule ,RouterModule.forRoot(routes),HttpClientModule,PageModule,ShareModule],
  declarations: [ 
    AppComponent, 
    LoginComponent,
    RegistroComponent,
    OrderByPipe 
   ],
  bootstrap:    [ AppComponent],
  providers: [RegistroService,ServiceFirebaseService,AuthGuardsGuard]
})

export class AppModule { }
