import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products} from '../products';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  product: Product | undefined;

  constructor(private rout: ActivatedRoute) {


   }
   
  ngOnInit() {
      
      const routeParams = this.rout.snapshot.paramMap;
      const productIdFromRoute = Number(routeParams.get('productId'));

      this.product = products.find(product => product.id === productIdFromRoute);
  }

}
