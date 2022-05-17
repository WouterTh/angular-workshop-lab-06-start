import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent as BookCardComponent } from './book/card/card.component';
import { CardComponent as MovieCardComponent } from './movie/card/card.component';
import { CardComponent as SharedCardComponent } from './shared/card/card.component';
import { TextArrayPipe } from './shared/text-array/text-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    MovieCardComponent,
    SharedCardComponent,
    TextArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
