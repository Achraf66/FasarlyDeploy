import { Component, OnInit } from '@angular/core';
import 'owl.carousel';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

    
  }

  redirectToSignin(){
    window.location.href = "https://fassarlyfront.azurewebsites.net/#/auth/login";
  }

  redirectToSignup(){
    window.location.href = "https://fassarlyfront.azurewebsites.net/#/auth/register";
  }
}
