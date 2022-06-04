import { TextArrayModule } from 'src/app/shared/text-array/text-array.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    TextArrayModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
