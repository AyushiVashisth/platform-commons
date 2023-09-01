import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';

const routes: Routes = [
  { path: '', component: CatalogueComponent },
  { path: 'cart', component: CartComponent },
  { path: 'confirm-order', component: ConfirmOrderComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: CatalogueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
