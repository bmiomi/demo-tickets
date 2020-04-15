import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as XLSX from 'xlsx';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styleUrls: ['./acount-settings.component.css']
})
export class AcountSettingsComponent implements OnInit {

  @Output() S_color:EventEmitter<string>=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ChangeColor (color:string ){
    console.log(color)
      this.S_color.emit(color)
      console.log(this.S_color)
    }

  cargarArchivo(){

   let file = Swal.fire({
      title: 'Seleccione el archivo',
      input: 'file',
      confirmButtonText:'Cargar',
      cancelButtonText:"cancelar",
      showCancelButton: true,
      showConfirmButton:true,
      inputValidator: archivo=>!archivo && 'no ha cargado el archivo',
      inputAttributes: {
        'accept': 'doc/*',
        'aria-label': 'Suber archivo de tickets'
      }
    }).then( (e )=>{
        console.log(e.value)
        let wopts:XLSX.WritingOptions={ bookType: 'xlsx', type: 'array' };

        const reader = new FileReader()
        reader.onload = (e) => {
          let data = e.target.result 
          let workbook:XLSX.WorkBook = XLSX.read(data,{ type: 'binary' })
            workbook.SheetNames.forEach( (sheetName)=>{
            let XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);  
            let json_object = JSON.stringify(XL_row_object);  
            console.log(json_object)
            })
        }
  
        reader.readAsBinaryString(e.value)

    })

  }

  
  Archivo(archivo) {
      let files = archivo.target.files;
    console.log(files)
      //   let R_archivo = new FileReader()
      //   R_archivo.onload = (e)=>{
      //     let data = (<any>e.target).result;  
      //     let workbook = XLSX.read(data,{ type: 'binary' })
      //     workbook.SheetNames.forEach( (sheetName)=>{

      //       let XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);  
      //       let json_object = JSON.stringify(XL_row_object);  

      //     })
      //   }
    
      // R_archivo.onerror = function(ex) {  
      //     console.log(ex);  
      //   };  
      //   R_archivo.readAsBinaryString(archivo);  
   
      // console.log(R_archivo)
   
    }




    
}