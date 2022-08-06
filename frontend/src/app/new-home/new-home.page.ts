import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.page.html',
  styleUrls: ['./new-home.page.scss'],
})
export class NewHomePage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }
  
   
      async onlogout(){
        const alert = await this.alertController.create({
          header: 'Do you want to logout?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log ('Canceled');
              },
            },
            {
              text: 'Yes',
              role: 'confirm',
              handler: () => {
                console.log ('Logout Successfully!');
            
                this.router.navigate(['login']);
              },
            },
          ],
        });
    
        await alert.present();
  
        }
}
  
