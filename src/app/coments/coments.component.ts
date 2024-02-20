import { Component } from '@angular/core';

@Component({
  selector: 'app-coments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios de lo que sea</h3>
    <img src="https://m.media-amazon.com/images/I/71zv--AZ4VL._AC_UF894,1000_QL80_.jpg" />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque dolorem repellat distinctio molestiae facilis sint eum id qui molestias ducimus doloribus, nesciunt quia quibusdam magni, iste aperiam harum vel!</p>
  `,
  styles: `
  img {
    with: 100%,
    height: auto,
  }
  `
})
export class ComentsComponent {

}
