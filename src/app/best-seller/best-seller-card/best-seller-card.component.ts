import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { LucideAngularModule } from 'lucide-angular';

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
