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
  filter = {
    fName: "",
    fId: "",
    fUserName: "",
    fCompany: "",
    fAcademy: 0,
    fRelign: 0
  };

  academies = [
    "Dhaka University",
    "CTG University",
    "Khulna University"
  ]

  members = [
    {
      id: 1001,
      userName: "jason",
      name: "Jason Statham",
      designation: "Team Manager",
      company: "A company",
      academic: 2,
      contact: "+8801*********",
      relign: 1
    },
    {
      id: 1002,
      userName: "mark",
      name: "Mark Ruffalo",
      designation: "Team Manager",
      company: "B company",
      academic: 1,
      contact: "+8801*********",
      relign: 1
    },
    {
      id: 1003,
      userName: "ryan",
      name: "Ryan Reynolds",
      designation: "Team Manager",
      company: "B company",
      academic: 2,
      contact: "+8801*********",
      relign: 3
    },
    {
      id: 1004,
      userName: "samuel",
      name: "Samuel L. Jackson",
      designation: "Team Manager",
      company: "C company",
      academic: 1,
      contact: "+8801*********",
      relign: 2
    },
    {
      id: 1005,
      userName: "tom",
      name: "Tom Hanks",
      designation: "Team Manager",
      company: "B company",
      academic: 2,
      contact: "+8801*********",
      relign: 1
    },
    {
      id: 1006,
      userName: "tom",
      name: "Tom Cruise",
      designation: "Team Manager",
      company: "C company",
      academic: 3,
      contact: "+8801*********",
      relign: 3
    },
    {
      id: 1007,
      userName: "robert",
      name: "Robert Downey Jr",
      designation: "The Boss",
      company: "F company",
      academic: 1,
      contact: "+8801*********",
      relign: 1
    },
    {
      id: 1008,
      userName: "adam",
      name: "Adam Sandler",
      designation: "CEO",
      company: "D company",
      academic: 2,
      contact: "+8801*********",
      relign: 2
    },
    {
      id: 1009,
      userName: "vin",
      name: "Vin Diesel",
      designation: "Team Manager",
      company: "B company",
      academic: 2,
      contact: "+8801*********",
      relign: 1
    },
    {
      id: 1010,
      userName: "mark",
      name: "Mark Wahlberg",
      designation: "Team Manager",
      company: "D company",
      academic: 3,
      contact: "+8801*********",
      relign: 2
    }
  ]

  filtered = this.members;

  filterMembers(){
    this.filtered = this.members.filter( member => {
      let res = true;

      if(this.filter.fId !== "")
        res = res && (+this.filter.fId == member.id);

      if(this.filter.fName !== "")
        res = res && (this.filter.fName.toLowerCase() == member.name.toLowerCase());

      if(this.filter.fUserName !== "")
        res = res && (this.filter.fUserName.toLowerCase() == member.userName.toLowerCase());
      
      if(this.filter.fCompany !== "")
        res = res && (this.filter.fCompany.toLowerCase() == member.company.toLowerCase());
      
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
    else
      $("#searchPanel").css("opacity", 1);
    
    this.route.queryParamMap
      .subscribe(params => {
        let viewType = params.get('viewmode');
        if(viewType)
          this.viewType = viewType;
      })
    
  }

}
