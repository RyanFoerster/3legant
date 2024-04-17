import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-card-values',
  standalone: true,
  imports: [],
  templateUrl: './card-values.component.html',
  styleUrl: './card-values.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardValuesComponent {
  imgSrc = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
}
