import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-username',
  templateUrl: './input-username.component.html',
  styleUrls: ['./input-username.component.scss'],
})
export class InputUsernameComponent implements OnInit {

  titolo: string = "Benvenuti";

  @Input() icona: string;

  @Input() tipo: string;

  @Input() nome: string;

  constructor() { 
    
  }

  ngOnInit() {}

}
