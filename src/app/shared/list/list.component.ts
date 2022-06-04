import { data } from 'src/app/data';
import { Book } from 'src/app/types/book';
import { Movie } from 'src/app/types/movie';

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent  {

  @Input()
  items: (Book | Movie)[] = [];

  selected?: Book | Movie;

  select(item: Book | Movie) {
    this.selected = item;
  }
}
