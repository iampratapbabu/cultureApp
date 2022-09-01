import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }

  //login functionality
  isLoggedIn = true;
  login(data:any){
    console.log("button clicked",data);
    //this.http.post('http://127.0.0.1:8000/user/login',data.value).subscribe(data=>console.log(data))
    
    if(this.isLoggedIn){
      console.log("user logged in",data.value);
      this.router.navigate(['/home']);
    }else{
      console.log("Invalid credentials");
    }
  }

}
