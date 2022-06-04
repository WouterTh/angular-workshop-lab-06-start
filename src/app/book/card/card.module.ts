import { SharedTextArrayModule } from 'src/app/shared/text-array';

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
    SharedTextArrayModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
