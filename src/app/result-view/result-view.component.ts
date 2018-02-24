import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {
  @Input('view-type') viewType:string;

  constructor() { }

  ngOnInit() {
  }

}
