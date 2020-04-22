import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FiltrePipe} from '../pipeFiltre/filtre.pipe';



@NgModule({
  declarations: [FiltrePipe],
  imports: [
    CommonModule
  ],
  exports: [FiltrePipe]
})
export class ModuleSharedModule { }
