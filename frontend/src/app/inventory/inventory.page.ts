import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
 
    prod: any;
    quanti: any;
    pri: any;
    cate: any;
    product: any;
    
    constructor(
      public _apiService: ApiService) {
        this.getInventory();
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

  ngOnInit() {
  }

}
