import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { HlmBadgeDirective } from '../../../../components/ui-badge-helm/src/lib/hlm-badge.directive';

@Component({
  selector: 'app-best-seller-card',
  standalone: true,
  imports: [LucideAngularModule, HlmBadgeDirective],
  templateUrl: './best-seller-card.component.html',
  styleUrl: './best-seller-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestSellerCardComponent {
  imgSrc = input.required<string>();
  title = input.required<string>();
  price = input.required<string>();
  oldPrice = input<string>();
  discount = input<boolean>();
}
