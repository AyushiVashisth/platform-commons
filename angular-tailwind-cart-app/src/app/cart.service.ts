import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];

  addToCart(product: any) {
    const existingProduct = this.cartItems.find(
      (item) => item.product === product
    );

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  }

  getCartItems() {
    return this.cartItems;
  }
  removeFromCart(product: any) {
    const index = this.cartItems.findIndex((item) => item.product === product);

    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }
}
