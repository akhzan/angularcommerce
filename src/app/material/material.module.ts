import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MdInputModule, 
  MdButtonModule, 
  MdIconModule, 
  MdCardModule,
  MdSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdSnackBarModule
  ],
  exports: [
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdSnackBarModule
  ],
  declarations: []
})
export class MaterialModule { }
