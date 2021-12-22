import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  @Input()
  startCounter:any;

  @Input()
  pauseCounter:any

  constructor() { }

  ngOnInit(): void {
  }

}
