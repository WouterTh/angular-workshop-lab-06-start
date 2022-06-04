import { data } from 'src/app/data';
import { Movie } from 'src/app/types';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Movie[] = [];

  constructor(
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const maxItems = parseInt(this.route.snapshot.queryParamMap.get('maxItems') ?? '10', 10);
    this.items = data.filter(d => d.type === 'movie').slice(0, maxItems) as unknown as Movie[];
  }
}
