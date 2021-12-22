import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-stamps',
  templateUrl: './time-stamps.component.html',
  styleUrls: ['./time-stamps.component.css']
})
export class TimeStampsComponent implements OnInit {

  @Input()
  props:any
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
