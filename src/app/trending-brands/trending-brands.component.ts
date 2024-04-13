import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trending-brands',
  standalone: true,
  imports: [],
  templateUrl: './trending-brands.component.html',
  styleUrl: './trending-brands.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrendingBrandsComponent {

}
