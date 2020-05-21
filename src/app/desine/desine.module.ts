import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesinePageRoutingModule } from './desine-routing.module';

import { DesinePage } from './desine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesinePageRoutingModule
  ],
  declarations: [DesinePage]
})
export class DesinePageModule {}
