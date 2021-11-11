import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products} from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private rout: ActivatedRoute, private cartService: CartService) {
  

   }

   addToCart(product: Product) {
      this.cartService.addToCart(product);
      window.alert("Your Product added to Cart!");
   }
   
  ngOnInit() {
      
      const routeParams = this.rout.snapshot.paramMap;
      const productIdFromRoute = Number(routeParams.get('productId'));

      this.product = products.find(product => product.id === productIdFromRoute);
  }

}
