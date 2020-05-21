import { DetailsFilmPage } from './../details-film/details-film.page';
import { DetailsFilmPageModule } from './../details-film/details-film.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ModuleSharedModule} from '../module-shared/module-shared.module';
import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  entryComponents: [
    DetailsFilmPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ModuleSharedModule,
    DetailsFilmPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
