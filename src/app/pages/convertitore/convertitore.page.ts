import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertitore',
  templateUrl: './convertitore.page.html',
  styleUrls: ['./convertitore.page.scss'],
})
export class ConvertitorePage implements OnInit {

  titolo: string = "Converti qui!";

  centigradi: number;
  fahrenheit: number;
  kilometri: number;
  miglia: number;

  constructor() { 
    
  }

  

  onChangeCentigradi(): void {  
    this.fahrenheit = ((this.centigradi * (9 / 5)) + 32);
  }
  onChangeFahrenheit(fahrenheit: number): void {  
    this.centigradi = ((fahrenheit - 32) * (5/9));
  }
  onChangeKm(kilometri: number): void {  
    this.miglia = (kilometri/1.609);
  }
  onChangeMi(miglia: number): void {  
    this.kilometri = (miglia * 1.609);
  }

  ngOnInit() {
  }

}
