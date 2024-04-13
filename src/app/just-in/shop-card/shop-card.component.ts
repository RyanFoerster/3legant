import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { LucideAngularModule } from 'lucide-angular';
import { HlmButtonDirective } from '../../../../components/ui-button-helm/src/lib/hlm-button.directive';
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
