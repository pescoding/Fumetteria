import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.page.html',
  styleUrls: ['./converter.page.scss'],
})
export class ConverterPage implements OnInit {

  titolo: string = "Converti qui!";

  c: number;
  f: number;
  km: number;
  mi: number;

  constructor() { 
    
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

  ngOnInit() {
  }

}
