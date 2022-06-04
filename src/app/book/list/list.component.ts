import { data } from 'src/app/data';
import { Book } from 'src/app/types';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Book[] = [];

  ngOnInit(): void {
    this.items = data.filter(d => d.type === 'book').slice(0, 10) as Book[];
  }
}
