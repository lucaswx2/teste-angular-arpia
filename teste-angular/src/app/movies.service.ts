import { Injectable } from '@angular/core';
import db from 'src/database/filmes.json';
import MovieInterface from './interfaces/movie-interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}

  getAll(): MovieInterface[] {
    return db;
  }

  getByName(searchInput: string): MovieInterface[] {
    return this.getAll().filter(
      (movie) =>
        movie.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
    );
  }

  getByGenre(searchInput: string): MovieInterface[] {
    return this.getAll().filter(
      (movie) =>
        movie.genres.findIndex(
          (g) => g.toLowerCase().indexOf(searchInput) > -1
        ) > -1
    );
  }

  getGenres(): Array<any> {
    const tempArray = db.map((movies) => movies.genres);

    return Array.prototype.concat
      .apply([], tempArray)
      .filter(this.unique)
      .sort();
  }

  private unique(value: string, index: number, self: string) {
    return self.indexOf(value) === index;
  }
}
