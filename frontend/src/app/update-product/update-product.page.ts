import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.page.html',
  styleUrls: ['./update-product.page.scss'],
})
export class UpdateProductPage implements OnInit {
  id: any;
  prod1: any;
  prod: any;
  quanti: any;
  pri: any;
  cate: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService,
    private alertController: AlertController
  ) { 
    this.route.params.subscribe((param:any) => {
      this.id = param.id;
      console.log(this.id);
      this.getProduct(this.id);
    })
  }

  ngOnInit() {
  }

  getProduct(id){
    this._apiService.getProduct(id).subscribe((res:any) => {
      console.log("SUCCESS", res);
      let product = res[0];
      this.prod1 = product.prodid;
      this.prod = product.product;
      this.quanti = product.quantity;
      this.pri = product.price;
      this.cate = product.category;
    },(err:any) => {
      console.log("ERROR", err);
    })
  }

  updateInventory(){
    let data = {
      prod1: this.prod1,
      prod: this.prod,
      quanti: this.quanti,
      pri: this.pri,
      cate: this.cate,
    }
    console.log(data)
    this._apiService.updateInventory(this.id, data).subscribe((res:any) => {
      console.log("SUCCESS", res);
      this.router.navigateByUrl('/inventory');
    },(err:any) => {
      console.log("ERROR", err);
    })
    
  }
  async onupdateInventory(){
    const alert = await this.alertController.create({
      header: 'Success!',
      message: 'Product has been Updated!',
      buttons: ['Close']})
      this.updateInventory();
  
    await alert.present();
  }
}
