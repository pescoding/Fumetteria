import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdinaPageRoutingModule } from './ordina-routing.module';

import { OrdinaPage } from './ordina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdinaPageRoutingModule
  ],
  declarations: [OrdinaPage]
})
export class OrdinaPageModule {}
