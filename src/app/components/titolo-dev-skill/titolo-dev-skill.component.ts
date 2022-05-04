import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titolo-dev-skill',
  templateUrl: './titolo-dev-skill.component.html',
  styleUrls: ['./titolo-dev-skill.component.scss'],
})
export class TitoloDevSkillComponent implements OnInit {

  @Input() titolo: string = "Benvenuto!";

  constructor() { }

  ngOnInit() {}

}
