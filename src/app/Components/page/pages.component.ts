import { Component, OnInit } from '@angular/core';

declare function Init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {

    Init_plugins();
  }
  
}
