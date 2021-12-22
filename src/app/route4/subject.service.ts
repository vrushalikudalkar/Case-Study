import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Data {
  amount:Number
  startCounter: Number;
  pauseCounter: Number;
  starttimeStamp:any
  pausetimeStamp:any
  state:any;
}
@Injectable({
  providedIn: 'root'
})


export class SubjectService {

  constructor() { }



  public sub = new Subject<Data>()

}
