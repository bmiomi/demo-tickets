import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Router } from '@angular/router';

import {ServiceFirebaseService} from '../../../Service/service-firebase.service';
import {ModeloUSuario}from '../../Models/Usuario.model';

import Swal from 'sweetalert2';

@Component({
  
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  constructor( private servicio:ServiceFirebaseService,
               private router:Router ) { }

  usuario:ModeloUSuario = new ModeloUSuario()

  ngOnInit() {  }



  valor(form:NgForm){

    if (form.invalid){return; }

    Swal.fire({
      allowOutsideClick:false,
      type:'info',
      text:'Espere Por favor'
    })

    Swal.showLoading()

    this.servicio.login(this.usuario).subscribe(
      resp=>{Swal.close();
      this.router.navigate(['/home']);
      },
      (err)=>{console.log(err);
            Swal.fire({allowOutsideClick:false,type:'info',text:err.error.error.message});
      }
    )
  }

}