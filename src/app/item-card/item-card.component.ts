import { Component } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {
  character = {
    name: 'Walter White',
    img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
    actor: 'Bryan Cranston',
    description:
      'Ator, dublador, roteirista, diretor e produtor norte-americano, mais conhecido por interpretar Walter White na série Breaking Bad.',
  };
}
