import { Component, OnInit } from '@angular/core';
import {ServiceFirebaseService} from '../../../../Service/service-firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private service:ServiceFirebaseService,private router:Router) { 

  }

  tecnico={'name':'Jairo'}
  ngOnInit() {
  }

  logout(){
    this.service.logout()
    this.router.navigateByUrl('\Login')
  }

}