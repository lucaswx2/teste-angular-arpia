import { Component, Input, OnInit } from '@angular/core';
import MovieInterface from 'src/app/interfaces/movie-interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @Input() movies: MovieInterface[];
  constructor() {}

  ngOnInit(): void {}
}
