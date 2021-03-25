import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-menu',
  templateUrl: './movie-menu.component.html',
  styleUrls: ['./movie-menu.component.scss'],
})
export class MovieMenuComponent {
  @Input() showMenu: boolean = false;
  @Input() genres: Array<string>;
  @Output() searchByGenre = new EventEmitter();
  @Output() search = new EventEmitter();
}
