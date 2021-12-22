import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit {
  
  data1:any
  prodList:any 
  prodGrid:any
  prod:any
  item:any
  
  constructor(private serv: ProductsService) { }

  ngOnInit(): void {
  }
  
  getProducts(){
      this.serv.getProducts().subscribe(products=>this.data1=products)
      this.prod = this.data1?.slice(0,40)
      return this.prod
  }

  listview(){
    this.prodList = this.getProducts()
  }

  gridview(){
    this.prodGrid = this.getProducts()  
  }

  selected(event:any){
    this.item = event.target.value

    if(this.item == "high"){
      this.prod.sort((a: any, b: any) =>
        a.id > b.id ? -1 : 1
      );
    }
    else{
      this.prod
    }
  }


}
