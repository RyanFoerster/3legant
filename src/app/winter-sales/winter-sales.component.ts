import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-winter-sales',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './winter-sales.component.html',
  styleUrl: './winter-sales.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WinterSalesComponent {}
