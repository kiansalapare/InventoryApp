import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  prod1: any;
  prod: any;
  quanti: any;
  pri: any;
  cate: any;
  product: any;
  handlerMessage = '';
  roleMessage = '';
  constructor(
    public _apiService: ApiService, private alertController: AlertController) {
      this.getInventory();
    }


  addProd(){
    let data={
    prod1: this.prod1,
    prod: this.prod,
    quanti: this.quanti,
    pri: this.pri,
    cate: this.cate,
    }

    this._apiService.addProd(data).subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.prod1 ='';
      this.prod = '';
      this.quanti = '';
      this.pri = '';
      this.cate = '';
    },(error: any) => {
      
      alert('ERROR');
    })
    
  }
  async onaddProd(){
    const alert = await this.alertController.create({
      header: 'Success!',
      message: 'Added to the Inventory!',
      buttons: ['Close']})
      this.addProd();
  
    await alert.present();
  }
  
  
  getInventory(){
    this._apiService.getInventory().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.product = res;
    },(error: any) => {
      console.log("ERROR ===",error);
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
