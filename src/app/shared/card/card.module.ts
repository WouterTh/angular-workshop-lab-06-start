import { BookCardModule } from 'src/app/book/card';
import { MovieCardModule } from 'src/app/movie/card';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    BookCardModule,
    MovieCardModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
