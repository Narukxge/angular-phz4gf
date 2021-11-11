import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
      name: '',
      adress: ''
  });

  

  items = this.cartService.getItems();

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {

   }

   onSubmit() {
      this.items = this.cartService.clearCart();
      console.warn('Your Order has been Submited', this.checkoutForm.value);
      this.checkoutForm.reset();
   }

  ngOnInit(): void {
  }

}
