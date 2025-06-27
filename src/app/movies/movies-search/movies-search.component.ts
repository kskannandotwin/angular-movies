import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { GenreDTO } from '../../genres/genres.models';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { MoviesSearchDTO } from './movies.search.models';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movies-search',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, MoviesListComponent],
  templateUrl: './movies-search.component.html',
  styleUrl: './movies-search.component.css'
})
export class MoviesSearchComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  location = inject(Location);
  ngOnInit(): void {
    this.readValuesFromURL();
    this.filterMovies(this.form.value as MoviesSearchDTO);
    this.form.valueChanges.subscribe(values => {
      this.movies = this.moviesOriginal;
      this.filterMovies(values as MoviesSearchDTO);
      this.writeParametersInTheURL();
    });
  }

  readValuesFromURL() {
    this.activatedRoute.queryParams.subscribe(params => {

      let obj: any = {};

      if (params['title']) {
        obj.title = params['title'];
      }

      if (params['genreId']) {
        obj.genreId = Number(params['genreId']);
      }

      if (params['upcomingReleases']) {
        obj.upcomingReleases = params['upcomingReleases'];
      }

      if (params['inTheaters']) {
        obj.inTheaters = params['inTheaters'];
      }

      this.form.patchValue(obj);
    });
  }

  writeParametersInTheURL() {
    let queryStrings = [];

    const valuesOfForm = this.form.value as MoviesSearchDTO;

    if (valuesOfForm.title) {
      queryStrings.push(`title=${encodeURIComponent(valuesOfForm.title)}`);
    }

    if (valuesOfForm.genreId !== 0) {
      queryStrings.push(`genreId=${valuesOfForm.genreId}`);
    }

    if (valuesOfForm.upcomingReleases) {
      queryStrings.push(`upcomingReleases=${valuesOfForm.upcomingReleases}`);
    }

    if (valuesOfForm.inTheaters) {
      queryStrings.push(`inTheaters=${valuesOfForm.inTheaters}`);
    }

    this.location.replaceState('movies/search', queryStrings.join('&'));
  }

  filterMovies(values: MoviesSearchDTO) {
    if (values.title) {
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
    }

    if (values.genreId !== 0) {
      this.movies = this.movies.filter(movie => movie.genres.indexOf(values.genreId) !== -1);
    }

    if (values.upcomingReleases) {
      this.movies = this.movies.filter(movie => movie.upcomingReleases);
    }

    if (values.inTheaters) {
      this.movies = this.movies.filter(movie => movie.inTheaters);
    }
  }
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    title: '',
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false
  });

  genres: GenreDTO[] = [
    { id: 1, name: 'Drama' },
    { id: 2, name: 'Action' },
    { id: 3, name: 'Comedy' }
  ];

  moviesOriginal = [
    {
      title: 'Inside Out 2',
      releaseDate: new Date,
      price: 1400.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/250px-Inside_Out_2_poster.jpg',
      genres: [1, 2, 3],
      upcomingReleases: true,
      inTheaters: false
    },
    {
      title: 'Batman',
      releaseDate: new Date(2016, 5, 3),
      price: 1200.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg',
      genres: [3],
      upcomingReleases: false,
      inTheaters: true
    },
    {
      title: 'Superman',
      releaseDate: new Date(2012, 10, 11),
      price: 1300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png',
      genres: [1, 3],
      upcomingReleases: true,
      inTheaters: false
    },
    {
      title: 'Iron Man',
      releaseDate: new Date(2018, 11, 21),
      price: 1500.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Iron_Man_%28circa_2018%29.png/250px-Iron_Man_%28circa_2018%29.png',
      genres: [3],
      upcomingReleases: false,
      inTheaters: false
    },
    {
      title: 'Captain America',
      releaseDate: new Date(2019, 4, 30),
      price: 1600.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/CaptainAmericaHughes.jpg/250px-CaptainAmericaHughes.jpg',
      genres: [2],
      upcomingReleases: false,
      inTheaters: true
    }
  ];

  movies = this.moviesOriginal;

  clear() {
    this.form.patchValue({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    });
  }
}
