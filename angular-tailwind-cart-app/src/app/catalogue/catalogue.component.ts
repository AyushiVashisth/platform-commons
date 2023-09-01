import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit(): void {
    // Fetch products from the JSON file
    this.http.get<any[]>('/assets/products.json').subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log('Cart items:', this.cartService.getCartItems());
    product.inCart = true;
    product.quantity = 1;
  }

  increaseQuantity(product: any) {
    this.cartService.addToCart(product);
    console.log('Cart items:', this.cartService.getCartItems());
    product.inCart = true;
    product.quantity++;
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      this.cartService.addToCart(product);
      product.inCart = true;
      product.quantity--;
    } else {
      this.cartService.addToCart(product);
      product.inCart = false;
      product.quantity = 0;
    }
  }
}
