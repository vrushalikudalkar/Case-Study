import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.css']
})
export class Route6Component implements OnInit {
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  data :any= []
  num:any
  onAddData(){
    this.data.push(this.data.length)
  }

  clicked(event:any){
    this.num = event.target.innerHTML
    alert(`Button in ${this.num}th div is clicked`)
  }
  


}
