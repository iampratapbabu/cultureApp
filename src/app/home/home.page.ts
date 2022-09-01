import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	title="Culture Holidays";
  constructor() {}

  ngOnInit(){
    console.log("this is the home page")
  }

  submit(){
    console.log("button pressed");
  }


}
