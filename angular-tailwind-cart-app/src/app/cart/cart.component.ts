import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Output() itemRemoved = new EventEmitter<any>();
  cartItems: any[] = this.cartService.getCartItems();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // Fetch cart data from a service or another source
    this.cartItems = this.cartService.getCartItems();
    console.log('Cart Items:', this.cartItems);
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.itemRemoved.emit(product);
  }

  calculateOrderTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.product.Price * item.quantity,
      0
    );
  }

  calculateDeliveryDate(): string {
    // Implement logic to calculate delivery date
    return '2 days';
  }
  checkout() {
    // Pass cartItems as query parameters to the confirm-order route
    this.router.navigate(['/confirm-order'], {
      queryParams: { cartItems: JSON.stringify(this.cartItems) },
    });
  }
}
