import { Routes } from '@angular/router';
import { InitPage } from '../pages/init-page/init-page';
import { Navbar } from '../components/navbar/navbar';
import { GridViewer } from '../pages/grid-viewer/grid-viewer';
import { ClockPage } from '../pages/clock-page/clock-page';
import { ProductPage } from '../pages/product-page/product-page';
import { ProfilePage } from '../pages/profile-page/profile-page';
import { TechPage } from '../pages/tech-page/tech-page';
import { StockTableComponent } from '../components/stock-table/stock-table/stock-table';


export const routes: Routes = [
    {path:"",component:GridViewer},
    {path:"clock",component:ClockPage},
    {path:"product",component:ProductPage},
    {path:"profile",component:ProfilePage},
    {path:"social",loadChildren:()=>import('../modules/social-media/social-media-module').then((m) => m.SocialMediaModule),},
    {path:"swiper",loadChildren:()=>import('../modules/swiper/swiper-module').then((m) => m.SwiperModule),},
    {path:"icons",component:TechPage},
    {path:"stocks",loadChildren:()=>import('../modules/stocks/stocks-module').then((m) => m.StocksModule),}
];
