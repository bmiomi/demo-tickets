import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

    
}