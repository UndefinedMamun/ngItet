import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
declare var $:any;

@Component({
  selector: 'result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {
  @Input('view-type') viewType:string;
  @Input('filtered') filtered:Array < {} >;
  index;
  academies = [
    "Dhaka University",
    "CTG University",
    "Khulna University"
  ]

  constructor(
    private _route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    $('#memberModal').modal({ show: false});

    this._route.queryParamMap.subscribe(params => {
      let index = params.get('index');
      if (index){
        this.index = +index;
        $('#memberModal').modal('show');
      }
    })
  }

}
