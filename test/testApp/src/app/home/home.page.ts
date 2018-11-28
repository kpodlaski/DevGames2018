import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {
	constructor(private platform: Platform, private deviceMotion: DeviceMotion) { 
	platform.ready().then(() => {
		// Watch device acceleration
		var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
			console.log(acceleration);
		});

		// Stop watch
		subscription.unsubscribe();
			console.log("unsubscribe");
		});
	
	};
	
	
}
