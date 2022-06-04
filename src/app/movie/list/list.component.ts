import { data } from 'src/app/data';
import { Movie } from 'src/app/types';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Movie[] = [];

  ngOnInit(): void {
    this.items = data.filter(d => d.type === 'movie').slice(0, 10) as unknown as Movie[];
  }
}
