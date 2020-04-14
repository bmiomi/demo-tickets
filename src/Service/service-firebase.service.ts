import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ModeloUSuario}from '../app/Models/Usuario.model'
import {map} from 'rxjs/operators'
@Injectable()
export class ServiceFirebaseService {

  private url ="https://identitytoolkit.googleapis.com/v1/accounts";

  private apikey='AIzaSyALlkfuVizZKQ5gy3sbjR-uZPTd2SkN28Q';

  userToken:string

//crear Nuevo Usuario
//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(  private http:HttpClient  ) { 
    this.leerToken()
  }


  logout(
  ){
        localStorage.removeItem('token');
  }

  
  login(Usuario:ModeloUSuario){
    const autData ={...Usuario,returnSecureToken:true};
    return this.http.post(`${this.url}:signInWithPassword?key=${this.apikey}`,autData)
      .pipe( map((resp)=>{this.guardarToken(resp['idToken'])})) 
      }
  
  nuevoUsuario(usuario:ModeloUSuario){
    const autData ={...usuario,returnSecureToken:true};
    return this.http.post(`${this.url}:signUp?key=${this.apikey}`,autData)
    .pipe( map((resp)=>{this.guardarToken(resp['idToken'])}) )
  }  

  private guardarToken(idtoken:string){
    this.userToken=idtoken
    localStorage.setItem('token',idtoken)
  }

  leerToken(){
    if(localStorage.getItem('token')){
      this.userToken=localStorage.getItem('token')
    }else{this.userToken=''}
    return this.userToken
  }


  auth():Boolean{
    return this.userToken.length>2;
}


}