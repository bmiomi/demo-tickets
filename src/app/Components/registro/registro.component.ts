import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Router } from '@angular/router';

import {ServiceFirebaseService} from '../../../Service/service-firebase.service';
import {ModeloUSuario,ModeloRegistro}from '../../Models/Usuario.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  constructor( private servicio:ServiceFirebaseService,
               private router:Router ) { }

  usuario:ModeloUSuario = new ModeloUSuario()

  ngOnInit() {
  }

  valor(form:NgForm){
    if (form.invalid){return; }
      Swal.fire({allowOutsideClick:false,type:'info',text:'Espere Por favor'});
      Swal.showLoading()
      this.servicio.nuevoUsuario(this.usuario).subscribe(
      resp=>{
        Swal.close()
        this.router.navigateByUrl('/home')
      },(err)=>{
      Swal.fire({allowOutsideClick:false,type:'info',text:err.error.error.message});
      });
      

    //this.router.navigate(['/home']);
  }

}