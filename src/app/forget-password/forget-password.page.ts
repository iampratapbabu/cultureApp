import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  constructor(private http: HttpClient,private router:Router,private alertController: AlertController) { }
  users:any=[];
  ngOnInit() {
    console.log("dashboard init fired");
    this.getData();
  }

  async forgetPassword(data:any){
    console.log("forget password runs",data.value);
    await this.presentAlert()
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: "Success",
      message: "Email sent successfully",
      buttons: ['OK'],
    });
    alert.present();

};

  getData(){
    this.http.get('http://127.0.0.1:8000/user/getall').subscribe(data=>{
      this.users=data;
      console.log(this.users);
      console.log(this.users.user);
    });
  }

  
   

};
