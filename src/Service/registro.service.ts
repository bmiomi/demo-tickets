import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModeloRegistro,ModeloTicket}from '../app/Models/Usuario.model';
import {map} from 'rxjs/operators';

@Injectable()
export class RegistroService {

public contador=0
  constructor( private http:HttpClient  ) { }

  private url ='https://appangular-aa2e4.firebaseio.com'




agregarLocalS(tickets:ModeloTicket){
 
  let ticksAntiguos:ModeloTicket[]= this.obtene
  this.contador=ticksAntiguos.length+1
  ticksAntiguos.push(tickets)

  localStorage.setItem('clientes',JSON.stringify(ticksAntiguos))
}

get obtene():ModeloTicket[]{

let clienteslocal:ModeloTicket[] =JSON.parse(localStorage.getItem('clientes'))
if(clienteslocal==null){
  return new Array<ModeloTicket>();
}return clienteslocal
}

Crear_registro(registro:ModeloRegistro){
  return this.http.post(`${this.url}/Registro.json`,registro).pipe(
    map( (res:any)=>{ registro.id=res.name
          return registro;
      })
  );
}

Actualizar_registro(registro:ModeloRegistro){
  const Tempregist={
    ...registro
  }
  delete Tempregist.id
  return this.http.put(`${this.url}/Registro/${registro.id}.json`,Tempregist) 
}

ObtenerRegistros(){
  return  this.http.get(`${this.url}/Registro.json`)
}

//Ticket

Crear_Tickt(tiket:Ticket){
  return this.http.post(`${this.url}/Ticket.json`,tiket);
}

Obtener_Tickts(){
  return this.http.get(`${this.url}/Ticket.json`);
}

}