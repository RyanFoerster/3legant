import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { CollectionsComponent } from './collections/collections.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { JustInComponent } from './just-in/just-in.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { PromotionComponent } from './promotion/promotion.component';
import { SalesComponent } from './sales/sales.component';
import { ShopByCategoriesComponent } from './shop-by-categories/shop-by-categories.component';
import { TrendingBrandsComponent } from './trending-brands/trending-brands.component';
import { ValuesComponent } from './values/values.component';
import { WinterSalesComponent } from './winter-sales/winter-sales.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    SalesComponent,
    HeaderComponent,
    HeroComponent,
    TrendingBrandsComponent,
    JustInComponent,
    ShopByCategoriesComponent,
    CollectionsComponent,
    BestSellerComponent,
    WinterSalesComponent,
    PromotionComponent,
    LatestArticlesComponent,
    NewsFeedComponent,
    ValuesComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = '3legant';
}
