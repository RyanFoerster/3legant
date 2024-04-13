import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-articles-card',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './articles-card.component.html',
  styleUrl: './articles-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesCardComponent {
  title = input.required<string>();
  imgSrc = input.required<string>();
}
