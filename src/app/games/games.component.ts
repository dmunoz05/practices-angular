import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

  games = [
    {
      id: 1,
      name: 'Game 1',
    },
    {
      id: 2,
      name: 'Game 2',
    },
    {
      id: 3,
      name: 'Game 3',
    }
  ]


}
