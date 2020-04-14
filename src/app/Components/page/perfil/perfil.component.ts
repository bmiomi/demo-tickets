import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../Service/registro.service';
import { ModeloTicket,ModeloRegistro } from '../../../Models/Usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private usuario:ModeloRegistro = new ModeloRegistro()
  
  constructor(private servicio:RegistroService){}

 ngOnInit() {
   this.datos()
  // this.usuario= new ModeloRegistro();
  }


datos(){
  console.log(this.usuario)
  this.servicio.Actualizar_registro(this.usuario).subscribe(
    res=>{`Respuesta Actualizar: ${console.log(res)}`}
  )
  this.cargarInfo()
}

cargarInfo(){
      let ModeloRegistro_ = new ModeloRegistro()
      ModeloRegistro_.id='1'
      ModeloRegistro_.registro=this.usuario
  }
  


onSubmit(form:NgForm){
    
    if ( form.invalid ) {
      return;
    }
   
    Swal.showLoading();

    let peticion: Observable<any>;
    if (this.usuario.id){
        peticion=this.servicio.Actualizar_registro(this.usuario)
    }else{
      peticion=this.servicio.Crear_registro(this.usuario)
      }
    peticion.subscribe( resp => {
      Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      type: 'info',
      allowOutsideClick: false
    });

    });
    
      form.resetForm()


  }


}