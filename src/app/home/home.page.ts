import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private inAppBrowser : InAppBrowser, private platform : Platform) {}

  subscription: any

  ngOnInit(){
   
  }

  launchSite(){
    this.inAppBrowser.create(`https://camertechtrends.com`, `_blank`);
  }

  exitApp(){
    navigator['app'].exitApp();
  }

  ionViewDidEnter(){
  
    this.subscription = this.platform.backButton.subscribe(async () => {
        navigator['app'].exitApp();
  });
  }
  
  ionViewWillLeave(){
    this.subscription.unsubscribe();
  }



}
