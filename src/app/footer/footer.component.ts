import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccordionFooterComponent } from './accordion-footer/accordion-footer.component';
import { InfoFooterComponent } from './info-footer/info-footer.component';
import { NewsletterFooterComponent } from './newsletter-footer/newsletter-footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    InfoFooterComponent,
    AccordionFooterComponent,
    NewsletterFooterComponent,
    CopyrightComponent,
  ],
})
export class FooterComponent {
  contents = [
    {
      title: 'Page',
      contents: ['Home', 'Shop', 'Product', 'Articles', 'Contact Us'],
    },
    {
      title: 'Info',
      contents: ['Shipping Policy', 'Return & Refund', 'Support', 'FAQs'],
    },
  ];
}
