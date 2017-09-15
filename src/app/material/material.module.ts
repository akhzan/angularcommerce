import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MdInputModule, 
  MdButtonModule, 
  MdIconModule, 
  MdCardModule 
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule
  ],
  exports: [
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule
  ],
  declarations: []
})
export class MaterialModule { }
