import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CollectionCardComponent } from './collection-card/collection-card.component';

@Component({
  selector: 'app-collections',
  standalone: true,
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CollectionCardComponent],
})
export class CollectionsComponent {
  collections = [
    {
      imgSrc: '../../../assets/images/collections/november-outfits.png',
      title: 'November Outfits',
    },
    {
      imgSrc: '../../../assets/images/collections/cashmere-set.png',
      title: 'Cashmere Set',
    },
    {
      imgSrc: '../../../assets/images/collections/new-nordic.png',
      title: 'The New Nordic',
    },
    {
      imgSrc: '../../../assets/images/collections/the-leather.png',
      title: 'The Leather',
    },
  ];
}
