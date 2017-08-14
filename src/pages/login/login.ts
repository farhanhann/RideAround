import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-Login',
  templateUrl: 'login.html'
})
export class LoginPage {

	@ViewChild('username') user;
	@ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth, public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }


  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('Success! You\'re logged in');
      this.navCtrl.setRoot( TabsPage );
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
  	console.log('Would sign in with ', this.user.value, this.password.value);
  }


/*  home(){
  	this.navCtrl.push(TabsPage);
  }*/
}
