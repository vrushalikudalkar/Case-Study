import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-count2',
  templateUrl: './count2.component.html',
  styleUrls: ['./count2.component.css']
})
export class Count2Component implements OnInit {

  startCounter:any
  pauseCounter:any
  constructor(private serv:SubjectService) {
   }

  ngOnInit(): void {
    this.serv.sub.subscribe((d)=>{
      this.pauseCounter = d.pauseCounter
    })
    
    this.serv.sub.subscribe((d)=>{
      console.log(d)
      this.startCounter=d.startCounter
    })

    
  }



}
