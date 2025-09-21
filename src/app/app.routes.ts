import { Routes } from '@angular/router';
import { InitPage } from '../pages/init-page/init-page';
import { Navbar } from '../components/navbar/navbar';
import { GridViewer } from '../pages/grid-viewer/grid-viewer';
import { ClockPage } from '../pages/clock-page/clock-page';
import { ProductPage } from '../pages/product-page/product-page';
import { ProfilePage } from '../pages/profile-page/profile-page';

export const routes: Routes = [
    {path:"",component:GridViewer},
    {path:"clock",component:ClockPage},
    {path:"product",component:ProductPage},
    {path:"profile",component:ProfilePage}
];
