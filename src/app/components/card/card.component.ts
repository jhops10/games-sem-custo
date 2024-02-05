import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input()
  imgUrl!: string;
  @Input()
  title!: string;
  @Input()
  description!: string;
  @Input()
  link!: string;
  @Input()
  category!: string;
}
