import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  cartItems = signal<Product[]>([]);
  
  // Computed signal for total price
  cartTotal = computed(() =>
    this.cartItems().reduce((total, item) => total + item.price, 0)
  );

  // Computed signal for number of items
  cartItemCount = computed(() => this.cartItems().length);

  // Applying a discount (e.g., 10% discount if more than 3 items)
  discountedTotal = computed(() => {
    const total = this.cartTotal();
    return this.cartItemCount() > 3 ? total * 0.9 : total; 
  });

  addToCart(product: Product) {
    this.cartItems.update(items => [...items, product]);
  }

  removeFromCart(productId: number) {
    this.cartItems.update(items => items.filter(item => item.id !== productId));
  }


}
