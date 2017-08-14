import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from "../tabs/tabs";

@Component({
  selector: 'page-RegisterPage',
  templateUrl: 'register.html'
})
export class RegisterPage {

	@ViewChild('username') user;
	@ViewChild('password') password;


  constructor(private alertCtrl: AlertController,private fire:AngularFireAuth, public navCtrl: NavController) {

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
 
registerUser()	{
	this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
 .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('Success! Your account has been created');
      this.navCtrl.setRoot( TabsPage );
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
  	console.log('Would sign in with ', this.user.value, this.password.value);
  
}




}




