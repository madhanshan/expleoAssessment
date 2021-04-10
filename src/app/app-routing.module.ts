import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketComponent } from './market/market.component';

import { ProductViewComponent } from './market/product-view/product-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'market', pathMatch: 'full'},
  { path: 'home', component: MarketComponent },
  {path : 'market', component: MarketComponent},
  {path : 'productView/:productId', component: ProductViewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
