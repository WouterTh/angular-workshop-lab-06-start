import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TextArrayPipe } from './text-array.pipe';

@NgModule({
  declarations: [TextArrayPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TextArrayPipe
  ]
})
export class TextArrayModule { }
