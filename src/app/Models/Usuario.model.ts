export class ModeloUSuario{
  nombre:string;
  password:string;
  email:string;
}

export class ModeloRegistro{
  
  id:string;
  Nombre:string;
  SegundoN:string;
  email:string;
  FechaN:string;
  Ciudad:string;
  AcercaUsuario:string
  registro:Object
}

export class ModeloTicket{

    id:number;
    Tecnico: ModeloRegistro;
    modoSolicitud:string;
    Region:string ;
    NombreEntidad:string;
    EscalarA:string;
    idXsales:string;
    Problema:string;
    Descripcion:string;
    Solucion:string;
    Estatus:string

  constructor(){ 

  }


}


