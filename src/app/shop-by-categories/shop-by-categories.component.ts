import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryCardComponent } from './category-card/category-card.component';

@Component({
  selector: 'app-shop-by-categories',
  standalone: true,
  templateUrl: './shop-by-categories.component.html',
  styleUrl: './shop-by-categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CategoryCardComponent],
})
export class ShopByCategoriesComponent {
  categories = [
    {
      imgSrc: '../../../assets/images/shop-by-categories/puffers.png',
      title: 'Puffers',
    },
    {
      imgSrc: '../../../assets/images/shop-by-categories/bombers.png',
      title: 'Bombers',
    },
    {
      imgSrc:
        '../../../assets/images/shop-by-categories/lightweight-jackets.png',
      title: 'Lightweight Jackets',
    },
    {
      imgSrc: '../../../assets/images/shop-by-categories/gilets.png',
      title: 'Gilets',
    },
    {
      imgSrc: '../../../assets/images/shop-by-categories/coats.png',
      title: 'Coats',
    },
    {
      imgSrc: '../../../assets/images/shop-by-categories/rainwear.png',
      title: 'Rainwear',
    },
  ];
}
