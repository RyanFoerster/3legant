import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsFeedComponent {

}
