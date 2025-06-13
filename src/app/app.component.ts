import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { RatingComponent } from './shared/components/rating/rating.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [MenuComponent, MatButtonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
