import { Component, OnInit } from '@angular/core';

import { data } from './data';
import { Book, Movie } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items: (Book | Movie)[] = [];

  selected?: Book | Movie;

  ngOnInit(): void {
    this.items = data.slice(0, 10) as (Book | Movie)[];
  }

  select(item: Book | Movie) {
    this.selected = item;
  }
}
