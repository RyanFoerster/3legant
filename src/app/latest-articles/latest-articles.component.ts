import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ArticlesCardComponent } from './articles-card/articles-card.component';

@Component({
  selector: 'app-latest-articles',
  standalone: true,
  imports: [LucideAngularModule, ArticlesCardComponent],
  templateUrl: './latest-articles.component.html',
  styleUrl: './latest-articles.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LatestArticlesComponent {
  latestArticles = [
    {
      title: '2023 Holiday Gift Guide',
      imgSrc: '../../../assets/images/latest/brown-shoes.png',
    },
    {
      title: '2023 Holiday Gift Guide',
      imgSrc: '../../../assets/images/latest/brown-outfit.png',
    },
    {
      title: '2023 Holiday Gift Guide',
      imgSrc: '../../../assets/images/latest/pullover.png',
    },
  ];
}
