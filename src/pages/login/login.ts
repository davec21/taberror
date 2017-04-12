import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  values: any[] = [];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.values.push('Value1');
  }

  goToTabs() {
    this.navCtrl.setRoot(TabsPage)
  }

}
