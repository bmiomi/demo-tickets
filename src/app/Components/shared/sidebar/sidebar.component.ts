import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() color1="danger"
  @Input() url= 'https://www.lareserva.com/sites/default/files/styles/article_image/public/field/image/natf.jpeg'
  
  
  constructor() { }

  ngOnInit() {
  }

}