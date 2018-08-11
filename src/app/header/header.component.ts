import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public invalidLogin = false;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  returnUrl() {
    return this.router.url;
  }

  toggleSearchPanel() {
    $("#searchPanel").toggleClass("visible");
  }

  ngAfterViewInit() {
    $(".marqueContent").marquee({
      duration: 10000
    });


  }

}
