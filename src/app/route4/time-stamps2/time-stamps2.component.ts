import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-time-stamps2',
  templateUrl: './time-stamps2.component.html',
  styleUrls: ['./time-stamps2.component.css']
})
export class TimeStamps2Component implements OnInit {



  obj:any
  arr:any=[]

  constructor(private serv:SubjectService) { }

  ngOnInit(): void {
    this.serv.sub.subscribe((d)=>{

      if(d.state == "start"){
        this.obj = {
          state:"Timer Started at:",
          time: d.starttimeStamp
        }
      } else if( d.state == "pause"){
        this.obj = {
          state: "Timer Paused at:",
          time: d.pausetimeStamp
        }
      }

      this.arr.push(this.obj)
    })
  }

}
