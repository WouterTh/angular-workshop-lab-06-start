import { DataService } from 'src/app/core/data.service';
import { Movie } from 'src/app/types';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Movie[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly dataService: DataService
  ) {}

  ngOnInit(): void {
    const maxItems = parseInt(this.route.snapshot.queryParamMap.get('maxItems') ?? '10', 10);
    this.dataService.getData().subscribe({
      next: (data) => this.items = data.filter(d => d.type === 'movie').slice(0, maxItems) as Movie[]
    });
  }
}
