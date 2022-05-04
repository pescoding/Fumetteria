import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrazionePageRoutingModule } from './registrazione-routing.module';

import { RegistrazionePage } from './registrazione.page';
import { TitoloDevSkillComponent } from 'src/app/components/titolo-dev-skill/titolo-dev-skill.component';
import { BottonePersonalizzatoComponent } from 'src/app/components/bottone-personalizzato/bottone-personalizzato.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrazionePageRoutingModule
  ],
  declarations: [RegistrazionePage, TitoloDevSkillComponent, BottonePersonalizzatoComponent]
})
export class RegistrazionePageModule {}
