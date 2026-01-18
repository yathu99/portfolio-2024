import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwipingPage } from '../../pages/swiping-page/swiping-page';

const routes: Routes = [
  {
    path:"",component:SwipingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwiperRoutingModule { }
