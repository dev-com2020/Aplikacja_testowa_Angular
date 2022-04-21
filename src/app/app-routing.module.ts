import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductItemComponent} from "./product-item/product-item.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:productId', component: ProductDetailComponent},
  // { path: 'product/:id', component: ProductDetailComponent,
  // children: [
  //   { path: '', component: ProductItemComponent },
    // { path: 'seller/:id', component: SellerInfoComponent },
  // ] },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
