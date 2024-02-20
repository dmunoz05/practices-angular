import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

  @Input() username: string = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  games = [
    {
      id: 1,
      name: 'GTA V',
    },
    {
      id: 2,
      name: 'Forza Horizon',
    },
    {
      id: 3,
      name: 'Call of Dutty',
    }
  ]

  fav(gameName: string) {
   this.addFavoriteEvent.emit(gameName);
  }

}
