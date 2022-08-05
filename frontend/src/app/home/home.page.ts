import { Component } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  prod: any;
  quanti: any;
  pri: any;
  cate: any;
  product: any;
  handlerMessage = '';
  roleMessage = '';
  constructor(
    public _apiService: ApiService) {
      this.getInventory();
    }


  addProd(){
    let data={
    prod: this.prod,
    quanti: this.quanti,
    pri: this.pri,
    cate: this.cate,
    }

    this._apiService.addProd(data).subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.prod = '';
      this.quanti = '';
      this.pri = '';
      this.cate = '';
      alert('SUCCESS');
    },(error: any) => {
      console.log("ERROR ===",error);
      alert('ERROR');
    })
  }
  
  getInventory(){
    this._apiService.getInventory().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.product = res;
    },(error: any) => {
      console.log("ERROR ===",error);
    })
  }

  deleteButton(id){
  this._apiService.deleteButton(id).subscribe((res:any) =>{
    console.log("SUCCESS");
    this.getInventory();
  },(err:any) => {
    console.log("ERROR") 
  }) 
}

refreshPage(e){
  this.getInventory();
  setTimeout(() => {
    console.log('Async operation has ended');
    e.target.complete();
  }, 2000);
} 



}
