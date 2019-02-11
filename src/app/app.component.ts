import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Initial page
import { SigninPage } from '../pages/signin/signin';
declare var ParsePushPlugin: any;
declare var window: any;

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


      //this.debugPush();
    });
  }

  debugPush(){
    if(window.ParsePushPlugin){
      ParsePushPlugin.getInstallationId(function(id) {
        // note that the javascript client has its own installation id,
        // which is different from the device installation id.
        alert("device installationId: " + id);
      }, function(e) {
        alert('error');
      });

      ParsePushPlugin.getSubscriptions(function(subscriptions) {
        alert(subscriptions);
      }, function(e) {
        alert('error');
      });
/*
      ParsePushPlugin.subscribe('SampleChannel', function(msg) {
        alert('OK');
      }, function(e) {
        alert('error');
      });

      ParsePushPlugin.unsubscribe('SampleChannel', function(msg) {
        alert('OK');
      }, function(e) {
        alert('error');
      });
*/
    }
  }


}
