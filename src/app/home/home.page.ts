import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private inAppBrowser : InAppBrowser) {}

  ionViewDidEnter(){
    this.inAppBrowser.create(`https://camertechtrends.com`, `_blank`, {
      hideurlbar : 'yes',
      toolbarcolor: '#24292e'
    });
  }

}
