import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-time-limit',
  templateUrl: './time-limit.component.html',
  styleUrls: ['./time-limit.component.css'],
  providers:[TimerComponent]
})
export class TimeLimitComponent implements OnInit {


  amount:any
  startTime:any
  pauseTime:any
  state:any

  startCounter:number=0
  pauseCounter:number=0

  val:any
  props:any

  constructor(private counter: TimerComponent) { }

  ngOnInit(): void {
    
  }

  start(){
    this.startCounter++
    this.startTime = new Date()
    this.state = "start"
    this.props = {
      state :this.state,
      time:this.startTime
    }
    console.log(this.props)
    this.val = this.counter.counter()
  }

  pause(){
    this.pauseCounter++
    this.pauseTime = new Date()
    this.state = "pause"
    this.props = {
      state :this.state,
      time:this.pauseTime
    }
    console.log(this.props)
  }

  reset(){
    this.pauseCounter=0;
    this.startCounter=0;
  }



}
