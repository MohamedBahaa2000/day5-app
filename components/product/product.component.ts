import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { Product } from '../../types/product';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() productItem: any;


  constructor(private productt: ServiceService) { }

    addToCartFromHome(item: Product) {
      this.productt.addToCart(item)
    }


}
