import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdButtonModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule
  ],
  exports: [
    MdInputModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: []
})
export class MaterialModule { }
