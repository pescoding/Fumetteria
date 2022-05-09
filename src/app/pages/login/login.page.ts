import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  titolo: string = "Benvenuti";

  c: number;
  f: number;
  km: number;
  mi: number;

  mioForm;

  disabile: boolean = true;

  constructor(private fb: FormBuilder) { 

    this.mioForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  eventoNotifica(messaggio: string) {

    let messaggioSplittato: string[] = messaggio.split(":");

    let unita: string = messaggioSplittato[0];
    let valore: number = +messaggioSplittato[1];

    if (unita === "C") {
      
      this.f = valore;

    }
    else if (unita === "F") {
      
      this.c = valore;

    }
    else if (unita === "KM") {
      
      this.mi = valore;

    }
    else if (unita === "MI") {
      
      this.km = valore;

    }

  }

  eventoBottone(): void{
    
    if (this.mioForm.get("username").valid && this.mioForm.get("password").valid)
      this.disabile = false;
    else
      this.disabile = true;

  }

  eventoDiClick(): void{
    
    if(!this.disabile)
      alert("Ciao " + this.mioForm.get("username").value + "!");

  }

  ngOnInit() {
  }

}
