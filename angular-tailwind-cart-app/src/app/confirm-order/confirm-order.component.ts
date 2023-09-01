import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css'],
})
export class ConfirmOrderComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve cartItems from route query parameters
    this.route.queryParams.subscribe((params) => {
      if (params['cartItems']) {
        this.cartItems = JSON.parse(params['cartItems']);
      }
    });
  }
  
}
