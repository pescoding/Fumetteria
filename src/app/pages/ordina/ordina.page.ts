import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordina',
  templateUrl: './ordina.page.html',
  styleUrls: ['./ordina.page.scss'],
})
export class OrdinaPage implements OnInit {

  n: number;
  opt: boolean = false;
  A: number[] = [];
  aggiunta: number;
  fine: boolean = false;

  check() : void{
    
    if (this.n && !isNaN(this.n))
      this.opt = true;
    else
      this.opt = false;

    console.log(this.opt);
    
  }

  aggiungi(): void{

    if (this.A.length < this.n) {
      
      this.A.push(this.aggiunta);

    }
    if( this.A.length == this.n ){

      this.A = this.ordinaCrescente( this.n , this.A);

      console.log(this.A);

      this.fine = true;

    }

  }

  ordinaCrescente( n: number, A: number[]) : number[]{

    let tmp : number;
  
    for( let i = 0 ; i < n-1 ; i++ ){
  
      for ( let j = i+1 ; j < n ; j++){
  
        if ( A[i] > A[j] ){
  
          tmp = A[i];
          A[i] = A[j];
          A[j] = tmp;
  
        }
  
      }
  
    }
  
    return A;
  
  }

  constructor() { }

  ngOnInit() {
  }

}
