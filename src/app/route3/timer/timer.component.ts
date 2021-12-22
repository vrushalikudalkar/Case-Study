import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { map, Observable, observable, Subject, take, takeWhile, tap, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnChanges {
  // data:any;

  @Input()
  amount:any

  data:any

  constructor() {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes['amount'].currentValue
    return this.data
}

  ngOnInit(): void {

  }


  counter(){
    timer(0,1000).pipe(takeWhile(()=>this.data>0),tap(()=> this.data--)).subscribe((d)=>{
      console.log(d)
    })
  }




}


