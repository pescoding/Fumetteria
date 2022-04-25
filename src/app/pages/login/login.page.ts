import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  titolo: string = "Benvenuti";

  username: string;
  password: string;

  constructor() { 
    
  }

  eventoDiClick(): void{
    
    alert("Ciao " + this.username + "!");

  }

  ngOnInit() {
  }

}
