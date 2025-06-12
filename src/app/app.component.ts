import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movies = [
    {
      title: 'Spider-Man',
      releaseDate: new Date,
      price: 1400.99
    },
    {
      title: 'Batman',
      releaseDate: new Date(2016, 5, 3),
      price: 1200.99
    },
    {
      title: 'Superman',
      releaseDate: new Date(2012, 10, 11),
      price: 1300.99
    },
    {
      title: 'Iron Man',
      releaseDate: new Date(2018, 11, 21),
      price: 1500.99
    },
    {
      title: 'Captain America',
      releaseDate: new Date(2019, 4, 30),
      price: 1600.99
    }
  ]
}
