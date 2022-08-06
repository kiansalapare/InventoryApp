import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
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

      async ondeleteButton(id){
        const alert = await this.alertController.create({
          header: 'Do you want to delete this product?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log ('Canceled');
              },
            },
            {
              text: 'OK',
              role: 'confirm',
              handler: () => {
                console.log ('Successfully Deleted');
            
                this.deleteButton(id);
              },
            },
          ],
        });
    
        await alert.present();
  
      }
      ngOnInit() {
      }
    
    }
    
    

 