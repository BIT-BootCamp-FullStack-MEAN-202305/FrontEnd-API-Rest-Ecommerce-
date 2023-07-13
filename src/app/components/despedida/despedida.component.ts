import { Component } from '@angular/core';

@Component({
  selector: 'app-despedida',
  templateUrl: './despedida.component.html',
  styleUrls: ['./despedida.component.css']
})
export class DespedidaComponent {
  data = [
    {
      title: 'Title 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero dolores quam veniam laborum deleniti officiis dolorem minus porro accusantium, fugit, possimus numquam! Ullam tempore corrupti quia! Itaque, omnis consequuntur.',
      button: `ver mas`
    },
    {
      title: 'Title 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero dolores quam veniam laborum deleniti officiis dolorem minus porro accusantium, fugit, possimus numquam! Ullam tempore corrupti quia! Itaque, omnis consequuntur.',
      button: `ver algo mas`
    },
    {
      title: 'Title 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero dolores quam veniam laborum deleniti officiis dolorem minus porro accusantium, fugit, possimus numquam! Ullam tempore corrupti quia! Itaque, omnis consequuntur.',
      button: `un poco mas`
    }
  ];
}
