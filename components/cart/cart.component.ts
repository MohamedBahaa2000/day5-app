import { Component } from '@angular/core';
import { Product } from '../../types/product';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartList?: Product[];

  // cartListLength=this.cartList?.length
  constructor(private productService: ServiceService) { }

  removeItem(item:Product){
    this.productService.removeFromCart(item)
  }

  ngOnInit() {
    this.productService.cartItems.subscribe((data) => {
      this.cartList = data
    })
  }
}
