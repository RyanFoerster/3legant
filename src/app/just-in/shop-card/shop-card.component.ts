import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { HlmBadgeDirective } from '../../../../components/ui-badge-helm/src/index';
import { HlmButtonDirective } from '../../../../components/ui-button-helm/src/index';
@Component({
  selector: 'app-shop-card',
  standalone: true,
  imports: [HlmBadgeDirective, HlmButtonDirective, LucideAngularModule],
  templateUrl: './shop-card.component.html',
  styleUrl: './shop-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopCardComponent {
  title = input.required<string>();
  imgSrc = input.required<string>();
  price = input.required<string>();
  active = input.required<boolean>();
}
