import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit{
  viewType = "list";

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  


  hideSearchPanel(){
    let self = this.router;
    $("#searchPanel").animate({
      left: "-70%",
      opacity: 0
    }, 400, "swing", function(){
      self.navigate(['/']);
    });
  }

  animateSearchPanel(){
    let searchPanel = $("#searchPanel");
    $(searchPanel).css({
      left: "-70%",
      opacity: 0
    })
    $(searchPanel).animate({
      left: 0,
      opacity: 1 
    }, 400, "swing");
  }

  ngOnInit() {
    let animate = this.route.snapshot.queryParamMap.get("animate")
    if(animate)
      this.animateSearchPanel();
  }

}
