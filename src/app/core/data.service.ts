import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { APP_CONFIG, AppConfig } from '../app.config';
import { Book, Movie } from '../types';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    @Inject(APP_CONFIG) private appConfig: AppConfig,
    private readonly http: HttpClient
  ) { }

  getData(): Observable<(Book | Movie)[]> {
    return this.http.get<(Book | Movie)[]>(this.appConfig.dataEndpoint);
  }
}
