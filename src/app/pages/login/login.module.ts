import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { TitoloDevSkillComponent } from 'src/app/components/titolo-dev-skill/titolo-dev-skill.component';
import { InputUsernameComponent } from 'src/app/components/input-username/input-username.component';
import { BottonePersonalizzatoComponent } from 'src/app/components/bottone-personalizzato/bottone-personalizzato.component';
import { InputConvertitoreComponent } from 'src/app/components/input-convertitore/input-convertitore.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage, TitoloDevSkillComponent, InputUsernameComponent, BottonePersonalizzatoComponent, InputConvertitoreComponent]
})
export class LoginPageModule {}
