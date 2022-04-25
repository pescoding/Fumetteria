import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {

  username: string;
  mail: string;
  password: string;
  confermaPassword: string;

  constructor() { }

  eventoDiClick(): void {
    
    let opzione: Boolean = true;

    if (!this.username) {
      
      alert("Inserire un username.");
      opzione = false;

    }
    else if (!this.mail) {
      
      alert("Inserire una mail.");
      opzione = false;

    }
    else if (!this.password) {
      
      alert("Inserire una password.");
      opzione = false;

    }
    else if (!this.confermaPassword) {
      
      alert("Inserire la password di conferma.");
      opzione = false;

    }
    else if (this.password != this.confermaPassword) {
      
      alert("La password di conferma è diversa dalla password impostata");
      opzione = false;

    }
    
    if (opzione == true)
      alert("Benvenuto " + this.username + "!");
  
  }  

  ngOnInit() {
  }

}
