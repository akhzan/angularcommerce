import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdButtonModule
  ],
  exports: [
    MdInputModule,
    MdButtonModule
  ],
  declarations: []
})
export class MaterialModule { }
