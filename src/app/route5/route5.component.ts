import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.css'],
})
export class Route5Component implements OnInit {
  count: number = 0;

  studentMarks:any

  initial= [
    { Name: 'asfd', Class: 3, Section: 'D', Sub1: 23, Sub2: 54, Sub3: 65 },
    { Name: 'yer', Class: 9, Section: 'E', Sub1: 23, Sub2: 45, Sub3: 34 },
    { Name: 'rtyu', Class: 8, Section: 'F', Sub1: 26, Sub2: 34, Sub3: 71 },
    { Name: 'wetr', Class: 5, Section: 'A', Sub1: 24, Sub2: 67, Sub3: 45 },
  ];;

  constructor() {}

  ngOnInit(): void {
    this.studentMarks = JSON.parse(JSON.stringify(this.initial));
  }

  order(event: any) {
    this.count++;
    var heading = event.target.innerHTML;
    if (this.count == 1) {
      this.studentMarks.sort((a: any, b: any) =>
        a[heading] < b[heading] ? -1 : a[heading] > b[heading] ? 1 : 0
      );
    } else if (this.count == 2) {
      this.studentMarks.sort((a: any, b: any) =>
        a[heading] > b[heading] ? -1 : 1
      );
    } else {
      this.studentMarks = this.initial;
    }
  }
}
