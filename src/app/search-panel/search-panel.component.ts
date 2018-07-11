import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchPanelService } from '../services/search-panel.service';
declare var $:any;
@Component({
  selector: 'search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit{
  returnUrl:String;
  viewType = "list";
  searchQuery;
  filter = {
    fName: "",
    fId: "",
    fUserName: "",
    fContact: "",
    fEmail: "",
    fCompany: "",
    fAcademy: 0,
    fRelign: 0
  };

  academies = [
    "Dhaka University",
    "CTG University",
    "Khulna University"
  ]

  members = [];

  filtered = this.members;

  mainSearch(){
    this.members = this.service.search(this.searchQuery);
    this.filterMembers();
  }

  filterMembers(){
    this.filtered = this.members.filter( member => {
      let res = true;

      if(this.filter.fId !== "")
        res = res && (+this.filter.fId == member.id);

      if(this.filter.fName !== "")
        res = res && (member.name.toLowerCase().includes(this.filter.fName.toLowerCase()));

      if(this.filter.fUserName !== "")
        res = res && (member.userName.toLowerCase().includes(this.filter.fUserName.toLowerCase()));
      
      if(this.filter.fEmail !== "")
        res = res && (member.email.toLowerCase().includes(this.filter.fEmail.toLowerCase()));
      
      if(this.filter.fContact !== "")
        res = res && (member.contact.includes(this.filter.fContact));
      
      if(this.filter.fCompany !== "")
        res = res && (member.company.toLowerCase().includes(this.filter.fCompany.toLowerCase()));
      
      if(this.filter.fAcademy > 0)
        res = res && (+this.filter.fAcademy == member.academic);
      
      if(this.filter.fRelign > 0)
        res = res && (+this.filter.fRelign == member.relign);

      return res;      
    })
  }

  consol(){
    console.log(this.filter);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SearchPanelService
    
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
    let self = this;
    $("#searchPanel").animate({
      left: "-70%",
      opacity: 0
    }, 400, "swing", function(){
      self.router.navigate([self.returnUrl]);
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
    else
      $("#searchPanel").css("opacity", 1);

    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';

    console.log(this.returnUrl);
    
    this.route.queryParamMap
      .subscribe(params => {
        let viewType = params.get('viewmode');
        if(viewType)
          this.viewType = viewType;
      })
    
  }

}
