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
    
  ) { 
    // this.router.events.subscribe((e: any[]) => {
    //   console.log('previous', e[1].urlAfterRedirects);
    // });
  }
  

  toggleFilters(){
    if($(window).width() > 480 )
      return;
    $('.search-filter').toggleClass("mView");
    $('body').toggleClass("noScroll");
  }

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
      left: "-90%",
      opacity: 0
    })
    $(searchPanel).animate({
      left: 0,
      opacity: 1 
    }, 200, "swing");
  }

  ngOnInit() {
    let animate = this.route.snapshot.queryParamMap.get("animate");
    if(animate)
      this.animateSearchPanel();
    
    this.route.queryParamMap
      .subscribe(params => {
        let viewType = params.get('viewmode');
        if(viewType)
          this.viewType = viewType;
      })
    
  }

}
