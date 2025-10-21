import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent 
implements OnInit {
  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  product: Product | undefined;
  /*
  The addToCart() method does the following:
    Takes the current product as an argument
    Uses the CartService addToCart() method to add the product to the cart
    Displays a message that you've added a product to the cart
  */
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!')
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that corresponds with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}