import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  constructor(private http: HttpClient,private router:Router) { }
  users:any=[];
  ngOnInit() {
    console.log("dashboard init fired");
    this.getData();
  }

  forgetPassword(data:any){
    console.log("forget password runs",data.value);
    
  }

  getData(){
    this.http.get('http://127.0.0.1:8000/user/getall').subscribe(data=>{
      this.users=data;
      console.log(this.users);
      console.log(this.users.user);
    });
  }
   

};
