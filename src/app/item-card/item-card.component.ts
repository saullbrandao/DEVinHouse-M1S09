import { Component, Input } from '@angular/core';

export interface Character {
  name: string;
  img: string;
  actor: string;
  description: string;
}

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {
  @Input()
  character!: Character;
}
