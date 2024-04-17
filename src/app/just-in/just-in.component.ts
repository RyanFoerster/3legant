import { NgClass, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShopCardComponent } from './shop-card/shop-card.component';

import {
  HlmCarouselComponent,
  HlmCarouselContentComponent,
  HlmCarouselItemComponent,
  HlmCarouselNextComponent,
  HlmCarouselPreviousComponent,
} from '@spartan-ng/ui-carousel-helm';

@Component({
  selector: 'app-just-in',
  standalone: true,
  templateUrl: './just-in.component.html',
  styleUrl: './just-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgClass,
    NgStyle,
    ShopCardComponent,
    HlmCarouselComponent,
    HlmCarouselContentComponent,
    HlmCarouselItemComponent,
    HlmCarouselNextComponent,
    HlmCarouselPreviousComponent,
  ],
})
export class JustInComponent {
  newIn: { title: string; imgSrc: string; price: string; active: boolean }[] = [
    {
      title: '96 Nupts Dip Dye Korea Puffers Jacket',
      imgSrc: '../../../assets/images/just-in/dip-dye.png',
      price: '$400.00',
      active: true,
    },
    {
      title: 'Paradigm Chilliwack Black Label Jacket',
      imgSrc: '../../../assets/images/just-in/paradigm.png',
      price: '$349.99',
      active: false,
    },
    {
      title: 'Paul Quilted Nylon Puffer bomber jacket',
      imgSrc: '../../../assets/images/just-in/quilted.png',
      price: '$300.00',
      active: false,
    },
    {
      title: 'Chilliwack jacket Bomber HUMANATURE',
      imgSrc: '../../../assets/images/just-in/chilliwack.png',
      price: '$111.99',
      active: false,
    },
  ];
}
