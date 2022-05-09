import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {

  mioForm;

  disabile: boolean = true;

  constructor(private fb: FormBuilder) { 

    this.mioForm = fb.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      confermaPassword: ['', Validators.required]
    });

  }

  eventoBottone(): void{
    
    if (this.mioForm.get("username").valid && this.mioForm.get("email").valid && this.mioForm.get("password").valid && this.mioForm.get("confermaPassword").valid)
      this.disabile = false;
    else
      this.disabile = true;

  }

  eventoDiClick(): void{
    
    if (!this.disabile) {
      
      if (this.mioForm.get("password").value === this.mioForm.get("confermaPassword").value)
        alert("Benvenuto " + this.mioForm.get("username").value + "!");
      else
        alert("Le due password non concidono");

    }
     

  }

  ngOnInit() {
  }

}
