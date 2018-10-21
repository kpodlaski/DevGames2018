import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import Cokolwiek from './my.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

	ngOnInit(){
		this.changeColor();
		Cokolwiek();
		
	}

	changeColor(){
		var x= document.getElementById("text1");
		x.style.color = "#ff0000";
	}
}
