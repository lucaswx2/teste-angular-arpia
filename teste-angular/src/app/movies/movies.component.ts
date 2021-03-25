import { Component, OnInit } from '@angular/core';
import MovieInterface from '../interfaces/movie-interface';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MoviesService],
})
export class MoviesComponent implements OnInit {
  public movies: MovieInterface[];
  public genres: Array<string>;
  public showMenu: boolean = false;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.genres = this.moviesService.getGenres();
    this.movies = this.moviesService.getAll();
  }

  search(searchInput: string) {
    this.movies = this.moviesService.getByName(searchInput);
  }

  searchByGenre(searchInput: string) {
    this.movies = this.moviesService.getByGenre(searchInput);
  }
}
