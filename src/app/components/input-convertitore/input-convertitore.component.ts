import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-convertitore',
  templateUrl: './input-convertitore.component.html',
  styleUrls: ['./input-convertitore.component.scss'],
})
export class InputConvertitoreComponent implements OnInit {

  @Input() unita: string;

  @Input() valore: number;

  @Output() eventoControllo = new EventEmitter<string>();

  constructor() { 
    
  }

  converti(): void {

    let valore: number;

    if (this.unita === "C") {
      
      valore = ((this.valore * (9 / 5)) + 32);

    }
    else if (this.unita === "F") {
      
      valore = ((this.valore - 32) * (5/9));

    }
    else if (this.unita === "KM") {
      
      valore = (this.valore/1.609);

    }
    else if (this.unita === "MI") {
      
      valore = (this.valore * 1.609);

    }

    console.log(valore);

    this.eventoControllo.emit(this.unita + ":" + valore);

  }

  ngOnInit() {}

}