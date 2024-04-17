import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-newsletter-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './newsletter-footer.component.html',
  styleUrl: './newsletter-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterFooterComponent {}
