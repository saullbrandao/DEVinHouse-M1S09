import { Component } from '@angular/core';
import { Character } from './item-card/item-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DEVinHouse-M1S09';

  character: Character = {
    name: 'Walter White',
    img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
    actor: 'Bryan Cranston',
    description:
      'Ator, dublador, roteirista, diretor e produtor norte-americano, mais conhecido por interpretar Walter White na série Breaking Bad.',
  };

  receiveChildOutput(value: any) {
    console.log(value);
  }
}
