import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  toggleFooter(){
    $('#footer').toggleClass("show");
  }

  ngOnInit() {
  }

}
