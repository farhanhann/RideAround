import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-Mainpage',
  templateUrl: 'mainpage.html'
})
export class MainpagePage {

  constructor(public navCtrl: NavController) {
  }

  loginPage=LoginPage;
  registerPage=RegisterPage;
}
