import { Component, OnInit } from '@angular/core';
import { timer, takeWhile, tap } from 'rxjs';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-timer2',
  templateUrl: './timer2.component.html',
  styleUrls: ['./timer2.component.css']
})
export class Timer2Component implements OnInit {
  recieved:any
  subscription:any

  pausedVal:any
  constructor(private serv: SubjectService) { }

  ngOnInit(): void {
    this.serv.sub.subscribe((d:any)=>{
      
      this.recieved = d.amount
      timer(0,1000).pipe(takeWhile(()=>this.recieved>0),tap(()=> this.recieved--)).subscribe((e:any)=>{
        this.pausedVal = d.amount -e
        console.log(this.pausedVal)
      })
    })
  }
  start(){
    
  }

  pause(){
    console.log("in timer pause")
    console.log(this.recieved)
    timer(0,0).pipe(takeWhile(()=>this.recieved>0),tap(()=> this.recieved)).subscribe((d)=>{
      console.log(d)
    })
  }

  reset(){

  }
}
