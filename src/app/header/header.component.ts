import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showSearchPanel(e: Event){
    e.preventDefault();
    $("#searchPanel").addClass("visible");
  }

  hideSearchPanel(){
    $("#searchPanel").removeClass("visible");
  }

}
