import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmButtonDirective } from '../../../components/ui-button-helm/src/lib/hlm-button.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HlmButtonDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
