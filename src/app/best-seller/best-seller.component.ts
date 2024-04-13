import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BestSellerCardComponent } from './best-seller-card/best-seller-card.component';

@Component({
  selector: 'app-best-seller',
  standalone: true,
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BestSellerCardComponent],
})
export class BestSellerComponent {
  articles: {
    imgSrc: string;
    title: string;
    price: string;
    oldPrice?: string;
    discount: boolean;
  }[] = [
    {
      imgSrc: '../../../assets/images/best-seller/quilted.png',
      title: 'Freestyle Crew Racer leather jacket',
      price: '$595.00',
      oldPrice: '$1000.00',
      discount: true,
    },
    {
      imgSrc: '../../../assets/images/best-seller/1996.png',
      title: '1996 Retro Nuptse Cashmere Jacket in Gray',
      price: '$149.99',
      discount: false,
    },
    {
      imgSrc: '../../../assets/images/best-seller/paradigm.png',
      title: 'Chilliwack black Bomber HUMANATURE',
      price: '$1195.99',
      discount: false,
    },
    {
      imgSrc: '../../../assets/images/best-seller/96 nuptse.png',
      title: '96 Nuptse Dip Dye bomber Jacket',
      price: '$400.99',
      discount: false,
    },
    {
      imgSrc: '../../../assets/images/best-seller/oversized real.png',
      title: 'Oversized real leather harrington jacket in black',
      price: '$249.99',
      discount: false,
    },
    {
      imgSrc: '../../../assets/images/best-seller/dip-dye.png',
      title: 'Chilliwack black Bomber HUMANATURE',
      price: '$199.95',
      discount: false,
    },
    {
      imgSrc: '../../../assets/images/best-seller/chilliwac.png',
      title: 'Paradigm Chilliwack coat Black Label',
      price: '$1495.00',
      discount: false,
    },
    {
      imgSrc: '../../../assets/images/best-seller/torrentshell.png',
      title: "Men's Torrentshell 3L Rain Jacket in Brown",
      price: '$149.00',
      discount: false,
    },
  ];
}
