import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { RegistroService } from '../../../../Service/registro.service';
import { ModeloTicket } from '../../../Models/Usuario.model';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})

export class TicketComponent {

  ticket:ModeloTicket= new ModeloTicket()

  forma:FormGroup;

  listas:any=['Pronaca','XSales']
  listas01:any=['Chat','Correo','Telefonica']
  listas02:any=['Dz','Quito','Guayaquil','Cuenca','Montecristi']
  listas03:any=['Pendiente','Abierto','Cerrado']
  listas04:any=['APRONAM','ALSODI','ALMABI','CENACOP','DIANA_ARELLANO', 'DISPROALZA','DISCARNICOS',  'DISPROVALLES','DISANAHISA','ECOAL','H_M','GARVELPRODUCT','GRAMPIR','JUDISPRO','JAIME_MALDONADO',   'MADELI','PATRICIO_CEVALLOS','PRONACNOR','PRONAIM','PAUL_FLORENCIA','SKANDINAR','POSSO_CUEVA']
  listas05:string[]=["Stock","Descuento","Cartera","Rutas-Entrega","Portafolio","Cliente","Técnico","Parametrización","Pedidos","Rutero","Promociones","Sincronización","Aplicativo","Correlativos","Cobros","GDD","Cartera","Configuración","Maestros","Hardware","Usuario"]
  

  constructor(private fb:FormBuilder,public servicio:RegistroService) {
      this.Crear_Formulario()
    }
  
  Crear_Formulario(){
    
    this.forma= this.fb.group({
      idTicket: [Math.floor(Math.random()*100).toString(),Validators.required],
      ModoSolicitud: ['',[Validators.required]],
      
      Direccion:this.fb.group({
        Escalamiento: ['',[Validators.required]],
        idXsales:['',]//falta validar este campo
      }),
      
      Problema: ['',[Validators.required]],
           
           opcion:this.fb.group({
      Region: ['',[Validators.required]],
      NameDz: ['',[]]//falta validar este campo

      }),
      Status: ['',[Validators.required]],
      Descripcion: ['',[Validators.required]],
      Solucion: ['',[Validators.required,]]
    })

    }

  cargardata(){
    this.forma.reset(     {
  idTicket: Math.floor(Math.random()*100).toString(),
  ModoSolicitud: "",
  Direccion: {
    Escalamiento: "",
    idXsales: ""
  },
  Problema: "",
  opcion: {
    Region: "",
    NameDz: ""
  },
  Status: "",
  Descripcion: "",
  Solucion: ""
})
  }

  xsales(control:FormControl):{[s:string]:boolean}{

    let dato= this.forma.controls['Direccion'].value.Escalamiento
    let dato2= this.forma.controls['Direccion'].value.idXsales

    if ( dato === "XSales" && dato2.length === 0){
        return {dato:false}
      } return null

  }

  GuardarCambios(){
    this.servicio.agregarLocalS(this.forma.value)
    this.cargardata()
    }




}