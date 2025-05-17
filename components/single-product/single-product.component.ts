import { Component, Input } from '@angular/core';
import { Product } from '../../types/product';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-single-product',
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  @Input() id?: string

  prodItem?: Product;


  constructor(private servicefrmdetls:ServiceService){}

  ngOnInit() {
    this.servicefrmdetls.getProductById(parseInt(this.id!)).subscribe((data)=>{
      this.ngOnInit=data
    })
  }
}
