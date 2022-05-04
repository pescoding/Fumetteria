import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConverterPageRoutingModule } from './converter-routing.module';

import { IonicModule } from '@ionic/angular';

import { InputConvertitoreComponent } from 'src/app/components/input-convertitore/input-convertitore.component';
import { ConverterPage } from './converter.page';
import { TitoloDevSkillComponent } from 'src/app/components/titolo-dev-skill/titolo-dev-skill.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConverterPageRoutingModule
  ],
  declarations: [ConverterPage,InputConvertitoreComponent, TitoloDevSkillComponent]
})
export class ConverterPageModule {}
