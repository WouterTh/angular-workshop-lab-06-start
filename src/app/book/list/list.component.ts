import { data } from 'src/app/data';
import { Book } from 'src/app/types';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Book[] = [];

  constructor(
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const maxItems = parseInt(this.route.snapshot.queryParamMap.get('maxItems') ?? '10', 10);
    this.items = data.filter(d => d.type === 'book').slice(0, maxItems) as Book[];
  }
}
