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

  movies?: any[];

  constructor() {
    setTimeout(() => {
      this.movies = [
        {
          title: 'Inside Out 2',
          releaseDate: new Date,
          price: 1400.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/250px-Inside_Out_2_poster.jpg'
        },
        {
          title: 'Batman',
          releaseDate: new Date(2016, 5, 3),
          price: 1200.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg'
        },
        {
          title: 'Superman',
          releaseDate: new Date(2012, 10, 11),
          price: 1300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png'
        },
        {
          title: 'Iron Man',
          releaseDate: new Date(2018, 11, 21),
          price: 1500.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Iron_Man_%28circa_2018%29.png/250px-Iron_Man_%28circa_2018%29.png'
        },
        {
          title: 'Captain America',
          releaseDate: new Date(2019, 4, 30),
          price: 1600.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/CaptainAmericaHughes.jpg/250px-CaptainAmericaHughes.jpg'
        }
      ]
    }, 2000);
  }

}
