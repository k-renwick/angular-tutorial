import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items = this.cartService.getItems();
  shippingOption = this.cartService.shippingOption;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    shipping: this.shippingOption.type,
  })
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  removeFromCart(itemIndex: number) {
    this.items = this.cartService.removeFromCart(itemIndex);
  }

  getSubtotal() {
    let subtotal = 0;
    this.items.forEach(item => {
      subtotal+=item.price;
    });
    return subtotal;
  }

}
