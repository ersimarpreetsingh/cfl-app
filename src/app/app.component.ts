import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { SplashScreen } from '@capacitor/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'credit-for-life-frontend';
  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar,
    // private fcm: FCM
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.show();
      // this.statusBar.backgroundColorByHexString('#000000');
        SplashScreen.hide();
     /*  this.fcm.getToken().then(token => {
        console.log(token);
        this.appService.deviceToken = token;
        console.log(this.appService.deviceToken);
      });

      // ionic push notification example
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
      });

      // refresh the FCM token
      this.fcm.onTokenRefresh().subscribe(token => {
        console.log(token);
        this.appService.deviceToken = token;
      }); */
    });
  }
}
