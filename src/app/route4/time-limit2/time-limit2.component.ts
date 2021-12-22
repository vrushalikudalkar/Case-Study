import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SubjectService } from '../subject.service';
import { Timer2Component } from '../timer2/timer2.component';

@Component({
  selector: 'app-time-limit2',
  templateUrl: './time-limit2.component.html',
  styleUrls: ['./time-limit2.component.css'],
  providers:[Timer2Component]
})
export class TimeLimit2Component implements OnInit {
  amount:any


  pauser = new BehaviorSubject<boolean>(false);
  starterStopper = new BehaviorSubject<boolean>(false);

  startCounter:number=0
  pauseCounter:number=0
  timeStamp:any
  pauseTime:any


  constructor(private serv: SubjectService ,private comp: Timer2Component) { }

  ngOnInit(): void {
  }

  start(){
    this.startCounter++
    this.timeStamp = new Date()

    this.serv.sub.next({amount:this.amount, startCounter:this.startCounter, pauseCounter:this.pauseCounter, starttimeStamp:this.timeStamp, pausetimeStamp:this.pauseTime, state:"start"})
    
    this.comp.start()
  } 

  pause(){
    this.pauseCounter++
    this.pauseTime=new Date()
    this.serv.sub.next({amount:this.amount, startCounter:this.startCounter, pauseCounter:this.pauseCounter, starttimeStamp:this.timeStamp, pausetimeStamp:this.pauseTime, state:"pause"})
    this.comp.pause()
  }

  reset(){
    this.comp.reset()
  }
  

}
