import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() {

  }


  //login functionality
  isLoggedIn = true;
  res:any={}
  async login(data:any){
    let res={};
    console.log("button clicked",data);
    await this.http.post('http://127.0.0.1:8000/user/login',data.value).subscribe(data=>{
      this.router.navigate(['/dashboard']);
      this.res = data;
      console.log(this.res);
      });

      
     
    
    
    // if(this.isLoggedIn){
    //   console.log("user logged in",data.value);
    //   this.router.navigate(['/home']);
    // }else{
    //   console.log("Invalid credentials");
    // }

   
  }

  

}
