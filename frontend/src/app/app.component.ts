import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private alertController: AlertController, private router: Router

  ) {

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

  
    


