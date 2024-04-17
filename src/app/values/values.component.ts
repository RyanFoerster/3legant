import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardValuesComponent } from './card-values/card-values.component';

@Component({
  selector: 'app-values',
  standalone: true,
  templateUrl: './values.component.html',
  styleUrl: './values.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardValuesComponent],
})
export class ValuesComponent {
  values = [
    {
      imgSrc: '../../../assets/icons/fast delivery.svg',
      title: 'Free Shipping',
      description: 'Order above $200',
    },
    {
      imgSrc: '../../../assets/icons/money.svg',
      title: 'Money-back',
      description: '30 days guarantee',
    },
    {
      imgSrc: '../../../assets/icons/lock 01.svg',
      title: 'Secure Payments',
      description: 'Secured by Stripe',
    },
    {
      imgSrc: '../../../assets/icons/call.svg',
      title: '24/7 Support',
      description: 'Phone and email support',
    },
  ];
}
