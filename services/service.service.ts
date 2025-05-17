import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../types/product';
import { HttpClient } from '@angular/common/http';
import { Prod } from '../types/Prod';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  private cart = new BehaviorSubject<Product[]>([])
  public cartItems = this.cart.asObservable();


  addToCart(product: Product) {
    const currentItem = this.cart.getValue()
    if (!currentItem.includes(product)) {
      this.cart.next([...currentItem, product])
    }
    else { alert("this item is already added") }
  }


  getAllItems(): Observable<Prod> {
    return this.http.get<Prod>('https://dummyjson.com/products')
  }


  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`https://dummyjson.com/products/${id}`)
  }


  removeFromCart(item: Product) {
    const updatedCart = this.cart.
      getValue().filter((produ) => { produ.id != item.id })

    this.cart.next(updatedCart)
  }
}
