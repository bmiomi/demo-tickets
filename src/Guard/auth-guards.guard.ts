import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {ServiceFirebaseService} from '../Service/service-firebase.service';


@Injectable()
export class AuthGuardsGuard implements CanActivate {
  
  constructor( private service:ServiceFirebaseService,
               private router:Router){
  }
  
  canActivate():boolean {
    console.log('Guard')
    if (this.service.auth()){
          return true;
    }else{
      this.router.navigateByUrl('/Login')
      return false
    }
  }



}
